import { FaArrowUpRightFromSquare } from "react-icons/fa6"; FiGithub
import { FiGithub } from "react-icons/fi";
import { SiReact, SiReactrouter, SiStyledcomponents } from "react-icons/si";

function BoxProyecto() {
    return (
        <div className="flex flex-col justify-between items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        bg-gradient-to-t from-[rgba(124,130,177,.12)] to-[rgba(17,18,27,0)] overflow-hidden">
            <figure className="overflow-hidden">
                <img className="w-full scale-100 hover:scale-125 transition duration-300 ease-in-out"
                    src="https://blackpachamame.github.io/desafíos-frontendmentor/testimonials-grid-section/design/desktop-preview.jpg"
                    alt="newsletter preview" />
            </figure>
            <div className="w-full text-center font-semibold p-4 pb-2">
                <h3 className="text-xl">Testimonials grid section</h3>
            </div>
            <div className="w-full flex flex-wrap gap-2 text-center font-semibold px-4 py-2">
                <span className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-md text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md">
                    <SiReact style={{ fontSize: "20px" }} /> React
                </span>
                <span className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-md text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md">
                    <SiReactrouter style={{ fontSize: "20px" }} /> React Router
                </span>
                <span className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-md text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md">
                    <SiReact style={{ fontSize: "20px" }} /> React
                </span>
                <span className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-md text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md">
                    <SiStyledcomponents style={{ fontSize: "20px" }} /> Styled Components
                </span>
            </div>
            <div className="w-full flex justify-center gap-4 p-4 pt-2">
                <a className="flex items-center gap-2"
                    href="https://blackpachamame.github.io/desafíos-frontendmentor/newsletter-sign-up-with-success-message/"><FaArrowUpRightFromSquare style={{ fontSize: "16px" }} />Online
                </a>
                <a className="flex items-center gap-2"
                    href="https://blackpachamame.github.io/desafíos-frontendmentor/newsletter-sign-up-with-success-message/"><FiGithub style={{ fontSize: "16px" }} />Código
                </a>
            </div>
        </div>
    )
}
export default BoxProyecto