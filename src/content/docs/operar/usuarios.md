---
title: Usuarios y permisos
description: Crear cuentas de staff, roles personalizados y permisos del panel.
---

**Dónde:** `/admin/usuarios`.

## Cómo funciona

- Los **roles son dinámicos**: el administrador los crea, edita y elimina desde el panel.
- Existen 2 roles de **sistema** que no se pueden borrar ni editar: `admin` y `user`.
- El rol `admin` tiene acceso total y **no se puede restringir**.
- El rol `user` es el cliente normal de la tienda: **no** entra al panel.
- Cualquier otro rol es **staff**: entra al panel y ve solo los módulos que sus permisos le permiten.

## Permisos

Cada permiso es **módulo + acción**:

- **Módulos:** dashboard, usuarios, pedidos, productos, modelos3d, cursos, configuración.
- **Acciones:** ver, crear, editar, eliminar.

El módulo `dashboard` con acción "ver" siempre está disponible para staff.

## Dar acceso a un empleado

1. Crea primero el **rol** si no existe (ej. "ventas": pedidos + productos, sin usuarios).
2. En **Usuarios**, crea o edita la cuenta del empleado y asígnale ese rol.
3. El empleado entra a `/admin` con su correo y contraseña (o Google) y verá solo sus módulos.

## Si falla

- **Un empleado no puede entrar a `/admin`:** su rol no es staff (revisa que el rol tenga marcado el acceso al panel) o está usando el rol `user`.
- **Entra pero el panel aparece vacío:** su rol no tiene permisos de ningún módulo. Edita el rol y agrega módulos con acción "ver".
