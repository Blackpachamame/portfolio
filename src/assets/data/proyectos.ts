import { v4 as uuid } from 'uuid';
import {
    FrontendmentorLogo,
    AluraPlusPreview,
    AluraPlusLogo,
    AdviceAppPreview,
    GorinkaiPreview,
    GorinkaiLogo,
    ParkOurLogo,
    proyect1,
    proyect2,
    proyect3,
} from "../images/proyects"

export const proyectos = [
    {
        id: uuid(),
        imgProyecto: AluraPlusPreview,
        logo: AluraPlusLogo,
        nombre: "Alura Plus",
        tecnologias: ["Framer Motion", "JavaScript", "React", "Styled Components"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: AdviceAppPreview,
        logo: FrontendmentorLogo,
        nombre: "Advice generator app",
        tecnologias: ["API", "JavaScript", "React", "Styled Components"],
        codigo: "https://github.com/Blackpachamame/Blackpachamame.github.io/tree/main/desafíos-frontendmentor/advice-generator-app",
        sitio: "https://advice-generator-app-dun-gamma.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: GorinkaiPreview,
        logo: GorinkaiLogo,
        nombre: "Gorinkai",
        tecnologias: ["Bootstrap", "jQuery", "PHP", "Purge CSS", "Sass"],
        codigo: "https://github.com/Blackpachamame/gorinkai",
        sitio: "https://blackpachamame.github.io/gorinkai/pages/index.html",
    },
    {
        id: uuid(),
        imgProyecto: proyect3,
        logo: ParkOurLogo,
        nombre: "Park-Our",
        tecnologias: ["Capacitor", "Quasar", "TypeScript"],
        codigo: "https://github.com/Blackpachamame/tp-final-park-our",
    },
    {
        id: uuid(),
        imgProyecto: proyect2,
        logo: FrontendmentorLogo,
        nombre: "Huddle landing page with curved sections",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
    {
        id: uuid(),
        imgProyecto: proyect1,
        logo: FrontendmentorLogo,
        nombre: "Newsletter sign-up form with success message",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        codigo: "https://github.com/Blackpachamame/aluraplus",
        sitio: "https://aluraplus-theta-gray.vercel.app",
    },
];