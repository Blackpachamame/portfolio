function BoxProyecto() {
    return (
        <div className="flex flex-col items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        bg-gradient-to-t from-[rgba(124,130,177,.12)] to-[rgba(17,18,27,0)] p-4">
            <figure className="rounded-lg overflow-hidden">
                <img className="w-full scale-100 hover:scale-125 transition duration-300 ease-in-out"
                    src="https://blackpachamame.github.io/desafíos-frontendmentor/testimonials-grid-section/design/desktop-preview.jpg"
                    alt="newsletter preview" />
            </figure>
            <div className="text-center p-3">
                <h3>Testimonials grid section</h3>
                <h4>
                    <a
                        href="https://blackpachamame.github.io/desafíos-frontendmentor/newsletter-sign-up-with-success-message/">Sitio
                        en Vivo
                    </a>
                </h4>
            </div>
        </div>
    )
}
export default BoxProyecto