import { v4 as uuid } from 'uuid';
import {
    FrontendmentorLogo,
    AluraPlusPreview,
    AluraPlusLogo,
    AdviceAppPreview,
    GorinkaiPreview,
    GorinkaiLogo,
    ParkOurPreview,
    ParkOurLogo,
    proyect1,
    proyect2,
} from "../images/proyects"

export const proyectos = [
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
        descripcion: "Aplicación generadora de consejos utilizando la Advice Slip API.",
        codigo: "https://github.com/Blackpachamame/Blackpachamame.github.io/tree/main/desafíos-frontendmentor/advice-generator-app",
        sitio: "https://advice-generator-app-dun-gamma.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: GorinkaiPreview,
        logo: GorinkaiLogo,
        nombre: "Gorinkai",
        tecnologias: ["Bootstrap", "jQuery", "PHP", "Purge CSS", "Sass"],
        descripcion: "Remake de Gorinkai, un sitio dedicado al estudio de la filosofía y el espíritu de las Artes Marciales.",
        codigo: "https://github.com/Blackpachamame/gorinkai",
        sitio: "https://blackpachamame.github.io/gorinkai/pages/index.html",
    },
    {
        id: uuid(),
        imgProyecto: ParkOurPreview,
        logo: ParkOurLogo,
        nombre: "Park-Our",
        tecnologias: ["Capacitor", "Quasar", "TypeScript"],
        descripcion: "Sistema pensado para la gestión de playas de estacionamiento.",
        codigo: "https://github.com/Blackpachamame/tp-final-park-our",
    },
    {
        id: uuid(),
        imgProyecto: proyect2,
        logo: FrontendmentorLogo,
        nombre: "Huddle landing page with curved sections",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descripcion: "Este sitio es una mutación del desafío Aluraflix de Alura Latam para el curso de frontend del Grupo 5.",
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: proyect1,
        logo: FrontendmentorLogo,
        nombre: "Newsletter sign-up form with success message",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descripcion: "Este sitio es una mutación del desafío Aluraflix de Alura Latam para el curso de frontend del Grupo 5.",
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
];