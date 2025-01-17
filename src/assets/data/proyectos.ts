import { v4 as uuid } from "uuid";
import {
  FrontendmentorLogo,
  AluraPlusPreview,
  AluraPlusLogo,
  AdviceAppPreview,
  GorinkaiPreview,
  GorinkaiLogo,
  ParkOurPreview,
  ParkOurLogo,
  TodoApp,
  ManganetaLogo,
  ManganetaPreview,
} from "../images/proyects";

export const proyectos = [
  {
    id: uuid(),
    imgProyecto: ManganetaPreview,
    logo: ManganetaLogo,
    nombre: "Manganeta",
    tecnologias: ["API", "JavaScript", "React", "React Slick", "Tailwind CSS"],
    descripcion: "Busca, lee y guarda tus mangas favoritos.",
    sitio: "https://manganeta.onrender.com/",
  },
  {
    id: uuid(),
    imgProyecto: TodoApp,
    logo: FrontendmentorLogo,
    nombre: "Todo app",
    tecnologias: ["Dnd Kit", "JavaScript", "React", "Tailwind CSS"],
    descripcion:
      "Aplicación de tareas pendientes, permite reordenar las tareas con drag and drop.",
    codigo: "https://github.com/Blackpachamame/todo-app",
    sitio: "https://todo-app-neon-kappa.vercel.app",
  },
  {
    id: uuid(),
    imgProyecto: AluraPlusPreview,
    logo: AluraPlusLogo,
    nombre: "Alura Plus",
    tecnologias: ["Framer Motion", "JavaScript", "React", "Styled Components"],
    descripcion: "Sitio de videos educativos de Alura Latam.",
    codigo: "https://github.com/Blackpachamame/aluraplus",
    sitio: "https://aluraplus-theta-gray.vercel.app",
  },
  {
    id: uuid(),
    imgProyecto: AdviceAppPreview,
    logo: FrontendmentorLogo,
    nombre: "Advice generator app",
    tecnologias: ["API", "JavaScript", "React", "Styled Components"],
    descripcion:
      "Aplicación generadora de consejos utilizando la Advice Slip API.",
    codigo:
      "https://github.com/Blackpachamame/frontendmentor/tree/main/junior/advice-generator-app",
    sitio: "https://advice-generator-app-orpin-nine.vercel.app/",
  },
  {
    id: uuid(),
    imgProyecto: GorinkaiPreview,
    logo: GorinkaiLogo,
    nombre: "Gorinkai",
    tecnologias: ["Bootstrap", "jQuery", "PHP", "Purge CSS", "Sass"],
    descripcion:
      "Remake de Gorinkai, un sitio dedicado al estudio de la filosofía y el espíritu de las Artes Marciales.",
    codigo: "https://github.com/Blackpachamame/gorinkai",
    sitio: "https://blackpachamame.github.io/gorinkai/pages/index.html",
  },
  {
    id: uuid(),
    imgProyecto: ParkOurPreview,
    logo: ParkOurLogo,
    nombre: "Park-Our",
    tecnologias: ["Capacitor", "Quasar", "TypeScript"],
    descripcion:
      "Sistema pensado para la gestión de playas de estacionamiento.",
    codigo: "https://github.com/Blackpachamame/tp-final-park-our",
  },
];
