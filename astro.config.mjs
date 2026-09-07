import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Dominio final del manual — ajustar cuando se defina dónde se hospeda
  site: 'https://joyerodigital.com',
  integrations: [
    starlight({
      title: 'Joyero Digital — Manual de entrega',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        { label: 'Inicio', link: '/' },
        {
          label: 'Operar la plataforma',
          items: [
            { label: 'Índice de recetas', link: '/operar/' },
            { label: 'Métricas y marketing', slug: 'operar/metricas' },
            { label: 'Pedidos', slug: 'operar/pedidos' },
            { label: 'Tienda', slug: 'operar/tienda' },
            { label: 'Modelos 3D', slug: 'operar/modelos-3d' },
            { label: 'Cursos e inscripciones', slug: 'operar/cursos' },
            { label: 'Pago por cuotas', slug: 'operar/cuotas' },
            { label: 'Cupones', slug: 'operar/cupones' },
            { label: 'Usuarios y permisos', slug: 'operar/usuarios' },
            { label: 'Cotizaciones 3D', slug: 'operar/cotizaciones' },
          ],
        },
        {
          label: 'Mantener y desplegar',
          items: [
            { label: 'Índice', link: '/mantener/' },
            { label: 'Mapa del sistema', slug: 'mantener/mapa' },
            { label: 'Arranque local', slug: 'mantener/local' },
            { label: 'Producción (Dokploy)', slug: 'mantener/produccion' },
            { label: 'Variables de entorno', slug: 'mantener/variables' },
            { label: 'Base de datos y backups', slug: 'mantener/datos' },
            { label: 'Pagos (Bold y PayPal)', slug: 'mantener/pagos' },
            { label: 'Archivos (R2 y Dropbox)', slug: 'mantener/archivos' },
            { label: 'Incidentes', slug: 'mantener/incidentes' },
          ],
        },
        { label: 'Inventario de accesos', slug: 'accesos' },
        { label: 'Videos', slug: 'videos' },
        { label: 'Pendientes y deuda conocida', slug: 'pendientes' },
        { label: 'Cierre y checklist', slug: 'cierre' },
      ],
    }),
  ],
});
