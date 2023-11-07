import { FaArrowUpRightFromSquare } from "react-icons/fa6"; FiGithub
import { FiGithub } from "react-icons/fi";

function BoxProyecto() {
    return (
        <div className="flex flex-col items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        bg-gradient-to-t from-[rgba(124,130,177,.12)] to-[rgba(17,18,27,0)] overflow-hidden">
            <figure className="rounded-lg overflow-hidden">
                <img className="w-full scale-100 hover:scale-125 transition duration-300 ease-in-out"
                    src="https://blackpachamame.github.io/desafíos-frontendmentor/testimonials-grid-section/design/desktop-preview.jpg"
                    alt="newsletter preview" />
            </figure>
            <div className="flex flex-col gap-3 text-center font-semibold p-4">
                <h3 className="text-xl">Testimonials grid section</h3>
                <div className="flex justify-center gap-4">
                    <a className="flex items-center gap-2"
                        href="https://blackpachamame.github.io/desafíos-frontendmentor/newsletter-sign-up-with-success-message/"><FaArrowUpRightFromSquare style={{ fontSize: "16px" }} />Online
                    </a>
                    <a className="flex items-center gap-2"
                        href="https://blackpachamame.github.io/desafíos-frontendmentor/newsletter-sign-up-with-success-message/"><FiGithub style={{ fontSize: "16px" }} />Código
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BoxProyecto