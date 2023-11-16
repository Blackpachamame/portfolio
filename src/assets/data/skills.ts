import { v4 as uuid } from 'uuid';
import {
    html,
    css,
    javascript,
    typescript,
    react,
    styledComponents,
    php,
} from "../images/skills"

export const skills = [
    {
        id: uuid(),
        imgSkill: html,
        nombre: "Html",
        icon: "SiHtml5",
    },
    {
        id: uuid(),
        imgSkill: css,
        nombre: "Css",
        icon: "SiCss3",
    },
    {
        id: uuid(),
        imgSkill: javascript,
        nombre: "Javascript",
        icon: "SiJavascript",
    },
    {
        id: uuid(),
        imgSkill: typescript,
        nombre: "Typescript",
        icon: "SiTypescript",
    },
    {
        id: uuid(),
        imgSkill: react,
        nombre: "React",
        icon: "SiReact",
    },
    {
        id: uuid(),
        imgSkill: styledComponents,
        nombre: "Styled Components",
        icon: "SiStyledcomponents",
    },
    {
        id: uuid(),
        imgSkill: php,
        nombre: "Php",
        icon: "SiPhp",
    },
];