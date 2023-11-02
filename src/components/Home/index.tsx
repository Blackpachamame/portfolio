import ButtonCV from "./ButtonCV"

function Principal() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 text-center w-full">
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
                    <span className="bg-gradient-to-r from-[#aa416d] to-[#334977] dark:from-[#9796f0] dark:to-[#fbc7d4] bg-clip-text text-transparent">
                        Marcos Andrés Travaglini
                    </span>
                </h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-[#2f294a] dark:text-[#d0d0ff] font-bold">
                    Desarrollador Web Frontend
                </h3>
            </div>
            <ButtonCV />
        </div>
    )
}
export default Principal