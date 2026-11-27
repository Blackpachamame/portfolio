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
- Generación estática con JavaScript mínimo y sin componentes hidratados en el cliente.

## Secciones

- Perfil
- Experiencia
- Proyectos: NesDuel, Mundifigus, TechToJob y PokéKit
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

## Prototipo de acuarela · E1 y E2

Esta rama integra el Hero estático de acuarela. El calendario austral, la clave de localStorage
**portfolio-season** y el selector del header siguen siendo los del portfolio. El script del head
resuelve la estación antes de que el Hero copie su plantilla inerte. Solo el tronco y las capas
seleccionadas generan solicitudes de arte para el Hero. El tronco tiene prioridad alta. Sin
JavaScript se muestra Primavera B, con los cinco enlaces y el CV operativos. Si falta una capa de
arte, las otras capas y el espacio reservado siguen visibles.

El encuadre 3:2 utiliza 1536 × 1024 como coordenadas y conserva el sangrado del paisaje. Los WebP de
producción se emiten con hash mediante importaciones de URL, conservando los bytes aprobados. La
referencia del tronco es **tree-base.webp** (sin pérdida). Para revisar Q95, cambiá esa única
importación en **src/data/watercolor.ts** por **tree-base-q95.webp** y reiniciá el servidor o
recompilá. El build incorpora solo el tronco importado.

La transición entre el papel claro y las secciones oscuras se deja visible para evaluar la unión.
Quedan pendientes la revisión de densidad y etiquetas en mobile y el ajuste final de la
composición. Los efectos previos y el motor de navegación pictórica se conservan en sus módulos,
fuera del montaje del prototipo.

E2 incorpora la transición C · Escalonada del laboratorio. Canvas 2D sustituye temporalmente solo
el follaje, el suelo y el paisaje. El controlador comparte el modo, la estación confirmada y el rumbo
con el Hero y el selector. El tema del documento cambia al confirmar la escena. Durante la preparación
y el pintado se pueden elegir el destino y el extremo que permite regresar. Automático se habilita si
el calendario austral lo resuelve a uno de esos extremos. Escape cierra el selector abierto o cancela
la transición si está cerrado.

La escena se confirma sin animación con movimiento reducido, resize o un fallo de Canvas. Si la
estación solicitada no se puede cargar, se recupera la confirmada. Una pestaña oculta pausa la
animación en curso. La navegación HTML completa limpia las superficies y las cachés en `pagehide`.

El motor se carga al elegir otra estación o en reposo tras el primer pintado. En reposo se decodifican,
de a una y con prioridad baja, hasta tres imágenes de la estación siguiente. La elección temprana
del template mantiene las solicitudes iniciales limitadas a la estación seleccionada y evita agregar
precargas. Los campos se calculan bajo demanda. La caché retiene hasta seis campos y habitualmente
hasta siete imágenes. Las capas visibles y las necesarias para la transición quedan protegidas.

Elegí el follaje de Invierno con `winterFoliageVariant` en `src/data/watercolor.ts`.
`snapped12-crown-v2` es la variante provisional y añade masas localizadas de nieve blanca
y azulada a la horquilla central de Snapped12. `snapped12-crown` conserva la primera versión
de nieve localizada, `snapped12` recupera la escarcha ajustada original, `frost` recupera
D · Escarcha refinada, `bare` deja el árbol desnudo y `snow-v3` queda disponible como comparación.
El build publica solo el follaje seleccionado, si corresponde.

Los depósitos de `snapped12-crown` siguen los bordes superiores del árbol canónico. Su paleta
se basa en Snow V3. La versión WebP sin pérdida pesa 631 956 bytes y conserva los píxeles de
Snapped12 fuera de los depósitos.

Snow V3 conserva el registro en identidad del PNG original. Añade nieve a la horquilla central
y a las ramas altas. La superposición muestra algunos trazos paralelos, en especial en las ramas
inferiores. El WebP de comparación conserva los píxeles del PNG, con su alfa.

Snapped12 usa el alfa del tronco sin pérdida, con umbral 128 en el lienzo de 1536 × 1024.
Conserva el alfa de D hasta 12 px de distancia euclidiana de esa silueta, lo atenúa linealmente
hasta 18 px y lo anula a partir de esa distancia. El WebP conserva el RGB de los píxeles visibles
y el 61,10 % de la suma del alfa original. Se generó con Python 3.13.14, NumPy 2.2.4,
Pillow 11.2.1 y libwebp 1.5.0, en modo sin pérdida.

| Follaje de Invierno   | Bytes   | SHA-256                                                            |
| --------------------- | ------- | ------------------------------------------------------------------ |
| D · Escarcha refinada | 680 840 | `b3824d3ad23d94f9e89bc4444dc040a4528bc6dfca2147f3d739ab86eef4494e` |
| Snapped12             | 627 432 | `ab092ee981f03fe95dd2145ed175b2d3b7be806599e97be7022e2af74ab9988f` |

Al confirmarse la escena, la paleta global se interpola durante 350 ms con `ease-in-out`.
Los colores se definen en `src/styles/theme.css` y se heredan del documento. El hover de los
enlaces conserva sus tiempos y mezcla los colores de la paleta que esté en uso en cada fotograma.
El primer pintado usa la estación resuelta en el `head`. Con movimiento reducido o en navegadores
sin soporte para la interpolación, el cambio cromático es inmediato.

Para revisar la rama en desarrollo ejecutá `bun run dev`. Para revisar el build local ejecutá
`bun run build` y luego `bun run preview`.
