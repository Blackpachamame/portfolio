import Redes from "./Redes"

function Brand() {
    return (
        <div className="relative lg:absolute lg:inset-x-10 w-full lg:w-auto flex items-center justify-between">
            <div className="flex items-center">
                <a href="/" className="text-2xl md:text-3xl font-medium text-primary-clamped">hue.tools</a>
            </div>
            <Redes />
        </div>
    )
}
export default Brand