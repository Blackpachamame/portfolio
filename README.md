# Marcos Travaglini — Portfolio

Portfolio profesional de Marcos Travaglini, Frontend Developer, orientado a presentar su perfil,
experiencia y proyectos con una navegación clara y directa.

**Sitio:** [marcostravaglini-portfolio.vercel.app](https://marcostravaglini-portfolio.vercel.app/)

## Sobre el proyecto

Landing estática construida con Astro para comunicar experiencia práctica, aportes frontend y
formas de contacto. Prioriza claridad, responsive, accesibilidad, rendimiento y mantenibilidad.
El contenido está separado de la presentación mediante datos tipados, componentes Astro y estilos
globales.

La identidad visual combina una composición editorial en modo oscuro con acentos lavanda y
detalles botánicos discretos.

## Stack

- Astro
- TypeScript
- CSS
- Bun
- Manrope alojada localmente

## Características

- Diseño responsive y exclusivamente oscuro.
- HTML semántico, enlace para saltar al contenido y navegación accesible por teclado.
- Estados de foco visibles y adaptación a `prefers-reduced-motion`.
- Imágenes responsivas optimizadas mediante `astro:assets`.
- Metadata canónica, Open Graph y Twitter Card con imagen social de 1200 × 630 px.
- Generación estática sin componentes hidratados ni JavaScript de aplicación en el cliente.

## Secciones

- Perfil
- Experiencia
- Proyectos: NesDuel, Mundifigus, ClipFlow y PokéKit
- Stack técnico
- Contacto

## Desarrollo local

Requiere [Bun](https://bun.sh/). Para preparar y ejecutar el proyecto:

```bash
git clone https://github.com/Blackpachamame/portfolio.git
cd portfolio
bun install
bun run dev
```

Astro sirve el proyecto en `http://localhost:4321` de forma predeterminada.

Para comprobar el build de producción localmente:

```bash
bun run build
bun run preview
```

## Scripts disponibles

| Comando              | Descripción                                              |
| -------------------- | -------------------------------------------------------- |
| `bun run dev`        | Inicia el servidor de desarrollo de Astro                |
| `bun run start`      | Alias de `bun run dev`                                   |
| `bun run build`      | Genera el sitio estático para producción                 |
| `bun run preview`    | Sirve localmente el build generado                       |
| `bun run check`      | Valida los componentes Astro y los tipos de TypeScript   |
| `bun run format`     | Comprueba el formato con Prettier                        |
| `bun run format:fix` | Aplica el formato definido por Prettier                  |
| `bun run quality`    | Ejecuta `check`, `format` y `build` de forma consecutiva |

## Estructura del proyecto

```text
public/                 # Archivos públicos, incluido el favicon
src/
├── assets/             # Fuentes e imágenes procesadas por Astro
├── components/         # Componentes de layout, secciones y decoración
├── data/               # Contenido profesional y navegación
├── layouts/            # Layout base y metadata del documento
├── pages/              # Página de entrada del sitio
├── styles/             # Estilos globales y sistema visual
└── types/              # Tipos TypeScript del contenido
astro.config.mjs        # Configuración de Astro y URL del sitio
package.json            # Scripts y dependencias
tsconfig.json           # Configuración estricta de TypeScript
```

## Deploy

El proyecto genera un sitio estático para Vercel. La URL de producción configurada en Astro es
[marcostravaglini-portfolio.vercel.app](https://marcostravaglini-portfolio.vercel.app/).
