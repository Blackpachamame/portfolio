import { v4 as uuid } from 'uuid';
import {
    javascript,
    typescript,
    react,
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
];