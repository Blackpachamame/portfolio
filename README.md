# Portfolio de Marcos Travaglini

Portfolio profesional de **Marcos Andrés Travaglini**, Frontend Developer Junior enfocado en el desarrollo de interfaces web con React, TypeScript y tecnologías modernas de frontend.

El objetivo del proyecto es presentar de forma clara:

- Experiencia práctica en equipos.
- Proyectos reales y colaborativos.
- Aportes técnicos concretos.
- Stack principal.
- Casos de estudio.
- Formación académica.
- Información de contacto profesional.

## Estado del proyecto

El portfolio se encuentra actualmente en reconstrucción.

La versión anterior fue desarrollada con:

- React
- Vite
- TypeScript
- Tailwind CSS

La versión 2 se está construyendo desde cero con Astro, priorizando:

- Rendimiento.
- Contenido estático.
- Mantenibilidad.
- Accesibilidad.
- SEO.
- Claridad para recruiters.
- Identidad visual propia.
- Bajo uso de JavaScript en cliente.

## Objetivos de la versión 2

- Crear una landing profesional de una sola página.
- Presentar proyectos reales antes que ejercicios antiguos.
- Incorporar experiencia profesional y colaborativa.
- Crear casos de estudio para NesDuel y Mundifigus.
- Separar contenido y presentación.
- Mantener una dirección visual personal y no genérica.
- Mejorar responsive y accesibilidad.
- Optimizar rendimiento y SEO.
- Facilitar actualizaciones futuras.
- Mantener coherencia con CV y LinkedIn.

## Stack del portfolio

- [Astro](https://astro.build/)
- TypeScript
- Tailwind CSS 4
- Bun
- Prettier
- prettier-plugin-astro
- prettier-plugin-tailwindcss

## Requisitos

Tener instalado Bun.

Para comprobar la instalación:

```bash
bun --version
```

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd Portfolio
```

Instalar dependencias:

```bash
bun install
```

## Desarrollo local

Iniciar el servidor de desarrollo:

```bash
bun run dev
```

El proyecto estará disponible normalmente en:

```text
http://localhost:4321
```

## Scripts disponibles

| Comando              | Descripción                                     |
| -------------------- | ----------------------------------------------- |
| `bun run dev`        | Inicia el servidor de desarrollo de Astro       |
| `bun run check`      | Ejecuta las validaciones de Astro y TypeScript  |
| `bun run format`     | Comprueba el formato con Prettier               |
| `bun run format:fix` | Aplica el formato con Prettier                  |
| `bun run build`      | Genera el build estático de producción          |
| `bun run preview`    | Ejecuta localmente el build generado            |
| `bun run quality`    | Ejecuta las validaciones generales del proyecto |

## Validación

Antes de integrar cambios se debe ejecutar:

```bash
bun run quality
```

Cuando se necesite ejecutar las comprobaciones por separado:

```bash
bun run check
bun run format:fix
bun run format
bun run build
```

## Estructura prevista

```text
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── ui/
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── site.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   └── proyectos/
├── styles/
│   └── global.css
└── types/
    └── portfolio.ts
```

La estructura puede ajustarse durante el desarrollo cuando exista una razón concreta, manteniendo siempre la separación entre:

- Contenido.
- Tipos.
- Presentación.
- Componentes.
- Páginas.

## Secciones previstas

La landing principal incluirá:

1. Header y navegación.
2. Hero.
3. Perfil profesional.
4. Experiencia.
5. Proyectos destacados.
6. Cómo puedo aportar.
7. Stack técnico.
8. Otras colaboraciones.
9. Contacto.
10. Footer.

## Proyectos principales

### NesDuel

Juego táctico multijugador 1v1 en tiempo real desarrollado como producto propio por un equipo de dos personas.

Marcos participó principalmente como Frontend Developer en:

- UI.
- Responsive.
- Configuración frontend.
- Google OAuth.
- Flujo frontend de Mercado Pago.
- Tests.
- Auditorías técnicas.
- Priorización y validación de cambios.
- Integración con el trabajo del backend.

Sitio:

https://nesduel.com/es/

El repositorio es privado.

### Mundifigus

Plataforma web creada alrededor del Mundial 2026, con:

- Álbum digital.
- Marketplace.
- Fixture.
- Calendario.
- Grupos.
- Playoffs.
- Predicciones.

Marcos participó en:

- Limpieza y reorganización del frontend.
- Migración progresiva desde Context hacia Zustand y TanStack Query.
- Fixture.
- Calendario.
- Grupos.
- Playoffs.
- Predicciones.
- Primera versión del intercambio en marketplace.
- Ajustes visuales y responsive.

Sitio:

https://mundifigus.com/

El repositorio es privado.

### NesConsulting

Sitio institucional de un proyecto interno de servicios digitales.

Marcos colaboró en:

- Consistencia visual.
- Contraste.
- Formularios.
- Responsive.
- Refactorización del footer.
- Correcciones ortográficas.
- Contenido.
- Metadatos.
- URLs.
- Configuración de Prettier.
- Normalización con Bun.
- Documentación.
- Configuración de build.

Sitio:

https://nes-consulting.com/

El repositorio es privado.

## Experiencia que se presentará

- Pangea Infinity.
- No Country.
- Puntarena.
- NesDuel.
- Mundifigus.
- NesConsulting.

Los proyectos y experiencias se describirán de forma honesta y diferenciando claramente:

- Empleo.
- Simulación laboral.
- Proyecto propio.
- Colaboración.
- Trabajo puntual.
- Repositorio privado.

## Principios del diseño

La versión 2 buscará una identidad:

- Clara.
- Profesional.
- Personal.
- Moderna.
- Editorial.
- Responsive.
- Accesible.
- Fácil de comprender.

Se evitarán elementos frecuentes en portfolios genéricos:

- Terminales falsas.
- Barras de progreso.
- Porcentajes de skills.
- Gradientes violetas genéricos.
- Glassmorphism excesivo.
- Logos flotantes.
- Animaciones constantes.
- Tarjetas idénticas repetidas.
- Métricas inventadas.
- Frases motivacionales vacías.

La primera versión de producción utilizará un sistema visual exclusivamente oscuro.

## Gestor de paquetes

El proyecto utiliza Bun.

No utilizar:

- npm
- pnpm
- Yarn

## Ramas y versiones

La reconstrucción de la versión 2 se desarrolla en la rama:

```text
rebuild/astro-v2
```

La versión anterior del portfolio permanece registrada mediante:

```text
v1.0.0
```

## Roadmap

### Fase 1 — Base técnica

- [x] Inicializar Astro.
- [x] Configurar TypeScript.
- [x] Configurar Tailwind CSS 4.
- [x] Configurar Prettier.
- [x] Configurar prettier-plugin-astro.
- [x] Configurar prettier-plugin-tailwindcss.
- [x] Agregar validaciones de calidad.
- [x] Registrar la versión anterior como `v1.0.0`.

### Fase 2 — Contenido y arquitectura

- [ ] Definir estructura semántica.
- [ ] Centralizar datos profesionales.
- [ ] Crear tipos TypeScript.
- [ ] Definir experiencia.
- [ ] Definir proyectos.
- [ ] Definir stack.
- [ ] Definir enlaces y contacto.
- [ ] Crear esqueleto de la landing.

### Fase 3 — Dirección visual

- [ ] Definir concepto visual.
- [ ] Definir tipografías.
- [ ] Definir paleta.
- [ ] Definir sistema de espaciado.
- [ ] Diseñar header y hero.
- [ ] Diseñar experiencia.
- [ ] Diseñar proyectos.
- [ ] Diseñar contacto.
- [ ] Definir motion y microinteracciones.

### Fase 4 — Casos de estudio

- [ ] Crear caso de estudio de NesDuel.
- [ ] Crear caso de estudio de Mundifigus.
- [ ] Incorporar capturas reales.
- [ ] Explicar rol y aportes.
- [ ] Indicar que los repositorios son privados.

### Fase 5 — Calidad

- [ ] Revisar mobile.
- [ ] Revisar tablet.
- [ ] Revisar desktop.
- [ ] Revisar accesibilidad.
- [ ] Revisar navegación por teclado.
- [ ] Revisar contraste.
- [ ] Revisar rendimiento.
- [ ] Revisar contenido final.

### Fase 6 — SEO y publicación

- [ ] Configurar metadata.
- [ ] Configurar canonical.
- [ ] Configurar Open Graph.
- [ ] Crear imagen social.
- [ ] Configurar sitemap.
- [ ] Crear robots.txt.
- [ ] Configurar JSON-LD.
- [ ] Configurar favicon.
- [ ] Revisar URL de producción.
- [ ] Publicar la versión 2.

## Repositorios privados

Algunos de los proyectos principales se desarrollaron en repositorios privados.

El portfolio utilizará:

- Demos públicas.
- Capturas reales.
- Descripciones técnicas.
- Casos de estudio.
- Explicaciones del rol.
- Aportes concretos y defendibles.

No se publicará código privado ni información sensible.

## Autor

**Marcos Andrés Travaglini**

Frontend Developer Junior  
Neuquén, Argentina  
Técnico Universitario en Desarrollo Web

- Portfolio: https://marcostravaglini-portfolio.vercel.app/
- LinkedIn: https://www.linkedin.com/in/marcos-travaglini/
- GitHub: https://github.com/Blackpachamame
