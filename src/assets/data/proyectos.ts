import { v4 as uuid } from 'uuid';
import {
    previewAluraPlus,
    previewAdviceApp,
    previewGorinkai,
    proyect1,
    proyect2,
    proyect3,
} from "../images/proyects"

export const proyectos = [
    {
        id: uuid(),
        imgProyecto: previewAluraPlus,
        nombre: "Alura Plus",
        tecnologias: ["React", "JavaScript", "Styled Components"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: previewAdviceApp,
        nombre: "Advice generator app",
        tecnologias: ["React", "JavaScript", "Styled Components"],
        codigo: "https://github.com/Blackpachamame/Blackpachamame.github.io/tree/main/desafíos-frontendmentor/advice-generator-app",
        sitio: "https://advice-generator-app-dun-gamma.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: previewGorinkai,
        nombre: "Gorinkai",
        tecnologias: ["Bootstrap", "PHP", "Sass"],
        codigo: "https://github.com/Blackpachamame/gorinkai",
        sitio: "https://blackpachamame.github.io/gorinkai/pages/index.html",
    },
    {
        id: uuid(),
        imgProyecto: proyect1,
        nombre: "Testimonials grid section",
        tecnologias: ["React", "TypeScript", "Tailwind"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: proyect2,
        nombre: "Huddle landing page with curved sections",
        tecnologias: ["Angular", "TypeScript", "Tailwind"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: proyect3,
        nombre: "Newsletter sign-up form with success message",
        tecnologias: ["React", "JavaScript", "Styled Components"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
];