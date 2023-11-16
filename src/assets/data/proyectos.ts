import { v4 as uuid } from 'uuid';
import {
    previewAluraPlus,
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
        tecnologias: ["React", "TypeScript", "Tailwind"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
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