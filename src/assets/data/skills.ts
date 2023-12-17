import { v4 as uuid } from 'uuid';
import {
    bootstrap,
    javascript,
    php,
    react,
    sass,
    styledComponents,
    tailwind,
    typescript,
} from "../images/skills"

export const skills = [
    {
        id: uuid(),
        imgSkill: bootstrap,
        nombre: "Bootstrap",
    },
    {
        id: uuid(),
        imgSkill: javascript,
        nombre: "JavaScript",
    },
    {
        id: uuid(),
        imgSkill: php,
        nombre: "PHP",
    },
    {
        id: uuid(),
        imgSkill: react,
        nombre: "React",
    },
    {
        id: uuid(),
        imgSkill: sass,
        nombre: "Sass",
    },
    {
        id: uuid(),
        imgSkill: styledComponents,
        nombre: "Styled Components",
    },
    {
        id: uuid(),
        imgSkill: tailwind,
        nombre: "Tailwind CSS",
    },
    {
        id: uuid(),
        imgSkill: typescript,
        nombre: "TypeScript",
    },
];