import { v4 as uuid } from 'uuid';
import {
    javascript,
    typescript,
    react,
    css,
    html,
    styledComponents,
} from "../images/skills"

export const skills = [
    {
        id: uuid(),
        imgSkill: javascript,
        nombre: "Javascript",
    },
    {
        id: uuid(),
        imgSkill: typescript,
        nombre: "Typescript",
    },
    {
        id: uuid(),
        imgSkill: react,
        nombre: "React",
    },
    {
        id: uuid(),
        imgSkill: css,
        nombre: "Css",
    },
    {
        id: uuid(),
        imgSkill: html,
        nombre: "Html",
    },
    {
        id: uuid(),
        imgSkill: styledComponents,
        nombre: "Styled Components",
    },
];