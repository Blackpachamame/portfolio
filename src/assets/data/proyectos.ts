import { v4 as uuid } from 'uuid';
import {
    proyect1,
    proyect2,
    proyect3,
} from "../images/proyects"

export const proyectos = [
    {
        id: uuid(),
        imgProyecto: proyect1,
        nombre: "Testimonials grid section",
        tecnologias: ["React", "TypeScript", "Tailwind"],
    },
    {
        id: uuid(),
        imgProyecto: proyect2,
        nombre: "Huddle landing page with curved sections",
        tecnologias: ["Angular", "TypeScript", "Tailwind"],
    },
    {
        id: uuid(),
        imgProyecto: proyect3,
        nombre: "Newsletter sign-up form with success message",
        tecnologias: ["React", "JavaScript", "Styled Components"],
    },
    {
        id: uuid(),
        imgProyecto: proyect1,
        nombre: "Testimonials grid section",
        tecnologias: ["React", "TypeScript", "Tailwind"],
    },
    {
        id: uuid(),
        imgProyecto: proyect2,
        nombre: "Huddle landing page with curved sections",
        tecnologias: ["Angular", "TypeScript", "Tailwind"],
    },
    {
        id: uuid(),
        imgProyecto: proyect3,
        nombre: "Newsletter sign-up form with success message",
        tecnologias: ["React", "JavaScript", "Styled Components"],
    },
];