---
title: Base de datos y backups
description: PostgreSQL en producción, migraciones con Drizzle y estrategia de backup.
---

## Diagrama entidad-relación

```mermaid
erDiagram
    %% USUARIOS Y AUTENTICACIÓN
    USER ||--o{ SESSION : tiene
    USER ||--o{ ACCOUNT : tiene
    USER }|--|| ROLE : "tiene (roleId)"
    ROLE ||--o{ ROLE_PERMISSION : define
    PERMISSION }|--o{ ROLE_PERMISSION : "es parte de"
    USER ||--o{ ORDER : "realiza (userId)"
    USER ||--o{ ENROLLMENT : "se inscribe (userId)"
    USER ||--o{ COUPON_USAGE : "usa (userId)"
    USER ||--o{ QUOTE : "solicita (userId)"

    %% PEDIDOS Y PRODUCTOS
    ORDER ||--o{ ORDER_ITEM : contiene
    ORDER }|--|| USER : "cliente (userId)"
    ORDER }|--|| COUPON : "aplica (couponId)"
    ORDER_ITEM }|--|| PRODUCT : "es (productId)"
    ORDER_ITEM }|--|| MODEL_3D : "es (model3dId)"

    PRODUCT ||--o{ PRODUCT_IMAGE : tiene
    PRODUCT_IMAGE }|--|| PRODUCT : "pertenece a (productId)"

    %% MODELOS 3D
    MODEL_3D }|--|| CATEGORY_3D : "categoría (categoryId)"
    MODEL_3D }|--|| SUBCATEGORY_3D : "subcategoría (subcategoryId)"
    MODEL_3D ||--o{ MODEL_3D_IMAGE : tiene
    MODEL_3D ||--o{ DOWNLOAD_TOKEN : genera
    DOWNLOAD_TOKEN }|--|| MODEL_3D : "para (model3dId)"
    DOWNLOAD_TOKEN }|--|| ORDER_ITEM : "viene de (orderItemId)"

    CATEGORY_3D ||--o{ SUBCATEGORY_3D : contiene
    SUBCATEGORY_3D }|--|| CATEGORY_3D : "pertenece a (categoryId)"

    %% CURSOS E INSCRIPCIONES
    COURSE ||--o{ ENROLLMENT : tiene
    ENROLLMENT }|--|| USER : "alumno (userId)"
    ENROLLMENT }|--|| COURSE : "en (courseId)"
    ENROLLMENT }|--|| COUPON : "usó (couponId)"
    ENROLLMENT ||--o{ INSTALLMENT : genera
    INSTALLMENT }|--|| ENROLLMENT : "pertenece a (enrollmentId)"

    COURSE }|--|| COURSE_TYPE : "es tipo (courseTypeId)"

    %% CUPONES
    COUPON ||--o{ COUPON_USAGE : "usado en"
    COUPON_USAGE }|--|| COUPON : "es (couponId)"
    COUPON_USAGE }|--|| USER : "por (userId)"
    COUPON_USAGE }|--|| ORDER : "en pedido (orderId)"
    COUPON_USAGE }|--|| ENROLLMENT : "en inscripción (enrollmentId)"

    %% COTIZACIONES
    QUOTE }|--|| USER : "solicitante (userId)"
    QUOTE ||--o{ QUOTE_ITEM : tiene
    QUOTE_ITEM }|--|| QUOTE : "pertenece a (quoteId)"

    %% PAGOS / TRANSACCIONES
    TRANSACTION }|--|| ORDER : "paga (orderId)"
    TRANSACTION }|--|| ENROLLMENT : "paga (enrollmentId)"
    TRANSACTION }|--|| INSTALLMENT : "paga (installmentId)"
    TRANSACTION }|--|| USER : "de (userId)"

    %% ENTIDADES
    USER {
        uuid id PK
        string email UK
        string name
        string passwordHash
        boolean emailVerified
        uuid roleId FK
        datetime createdAt
        datetime updatedAt
    }

    ROLE {
        uuid id PK
        string name UK
        string description
        boolean isSystem
        boolean isStaff
        datetime createdAt
    }

    PERMISSION {
        uuid id PK
        string module
        string action
        string description
    }

    ROLE_PERMISSION {
        uuid roleId FK
        uuid permissionId FK
    }

    SESSION {
        uuid id PK
        uuid userId FK
        string token UK
        datetime expiresAt
        string ipAddress
        string userAgent
    }

    ACCOUNT {
        uuid id PK
        uuid userId FK
        string providerId
        string providerAccountId
        string accessToken
        string refreshToken
        datetime expiresAt
    }

    ORDER {
        uuid id PK
        string orderNumber UK
        uuid userId FK
        uuid couponId FK
        enum status
        decimal subtotal
        decimal discount
        decimal tax
        decimal total
        string currency
        jsonb shippingAddress
        jsonb billingAddress
        datetime paidAt
        datetime createdAt
        datetime updatedAt
    }

    ORDER_ITEM {
        uuid id PK
        uuid orderId FK
        uuid productId FK
        uuid model3dId FK
        integer quantity
        decimal unitPrice
        decimal total
        jsonb metadata
    }

    PRODUCT {
        uuid id PK
        string name
        string slug UK
        string description
        decimal price
        integer stock
        boolean active
        datetime createdAt
        datetime updatedAt
    }

    PRODUCT_IMAGE {
        uuid id PK
        uuid productId FK
        string r2Key
        string url
        integer sortOrder
        boolean isMain
    }

    MODEL_3D {
        uuid id PK
        string name
        string slug UK
        string description
        decimal price
        uuid categoryId FK
        uuid subcategoryId FK
        string material
        string format
        decimal weight
        string dimensions
        string dropboxPath
        boolean active
        boolean isNew
        boolean isBestseller
        boolean isFeatured
        datetime createdAt
        datetime updatedAt
    }

    MODEL_3D_IMAGE {
        uuid id PK
        uuid model3dId FK
        string r2Key
        string url
        integer sortOrder
        boolean isMain
    }

    CATEGORY_3D {
        uuid id PK
        string name
        string slug UK
        string description
        integer sortOrder
        boolean active
    }

    SUBCATEGORY_3D {
        uuid id PK
        string name
        string slug UK
        uuid categoryId FK
        integer sortOrder
        boolean active
    }

    DOWNLOAD_TOKEN {
        uuid id PK
        uuid model3dId FK
        uuid orderItemId FK
        string token UK
        integer maxDownloads
        integer usedDownloads
        datetime expiresAt
        datetime createdAt
    }

    COURSE_TYPE {
        uuid id PK
        string name
        string code
    }

    COURSE {
        uuid id PK
        string name
        string slug UK
        string description
        decimal price
        uuid courseTypeId FK
        datetime startDate
        string meetingLink
        string driveFolder
        boolean allowsInstallments
        integer installmentCount
        integer installmentIntervalDays
        boolean active
        datetime createdAt
        datetime updatedAt
    }

    ENROLLMENT {
        uuid id PK
        uuid userId FK
        uuid courseId FK
        uuid couponId FK
        enum status
        decimal amountPaid
        decimal totalAmount
        boolean accessRevoked
        string revokeReason
        datetime revokedAt
        datetime createdAt
        datetime updatedAt
    }

    INSTALLMENT {
        uuid id PK
        uuid enrollmentId FK
        integer number
        decimal amount
        datetime dueDate
        enum status
        datetime paidAt
        uuid transactionId FK
    }

    COUPON {
        uuid id PK
        string code UK
        enum type
        decimal value
        datetime validFrom
        datetime validUntil
        integer maxUses
        integer usedCount
        boolean active
        jsonb applicableTo
        datetime createdAt
    }

    COUPON_USAGE {
        uuid id PK
        uuid couponId FK
        uuid userId FK
        uuid orderId FK
        uuid enrollmentId FK
        datetime usedAt
    }

    QUOTE {
        uuid id PK
        uuid userId FK
        enum status
        decimal estimatedTotal
        jsonb configuration
        datetime createdAt
        datetime updatedAt
    }

    QUOTE_ITEM {
        uuid id PK
        uuid quoteId FK
        string name
        decimal price
        jsonb details
    }

    TRANSACTION {
        uuid id PK
        string externalId
        uuid orderId FK
        uuid enrollmentId FK
        uuid installmentId FK
        uuid userId FK
        enum provider
        enum status
        decimal amount
        string currency
        jsonb payload
        jsonb webhookData
        datetime processedAt
        datetime createdAt
    }
```

---

## Dónde vive

- **Motor:** PostgreSQL >= 14.
- **Ubicación en producción:** <!-- RELLENAR: contenedor Dokploy / servicio externo, volumen, etc. -->
- **Conexión:** variable `DATABASE_URL` (ver [Variables](/mantener/variables/)).

## Migraciones (Drizzle)

El schema es la fuente de verdad. **Nunca** editar los `.sql` generados a mano.

```bash
# 1. Editar el schema del dominio en packages/database/src/<dominio>/schema.ts
# 2. Generar la migración
bun run db:generate
# 3. Aplicar
bun run db:push        # desarrollo
bun run db:migrate     # migraciones formales
```

`bun run db:studio` abre Drizzle Studio para inspeccionar datos.

## Backups

<!-- RELLENAR: política real de backups (frecuencia, retención, dónde se guardan) -->

Comando base para backup manual:

```bash
pg_dump "$DATABASE_URL" > backup-$(date +%Y%m%d-%H%M).sql
```

Restaurar:

```bash
psql "$DATABASE_URL" < backup-YYYYMMDD-HHMM.sql
```

:::caution[Obligatorio antes de la entrega]
Documentar la política real de backups aquí y **probar una restauración** al menos una vez. Un backup que nunca se restauró no es un backup.
:::
