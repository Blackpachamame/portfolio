import ButtonCV from "./ButtonCV"

export default function Principal() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 text-center w-full">
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
                    <span className="bg-gradient-to-r from-rose-900 to-blue-900 dark:from-[#9796f0] dark:to-[#fbc7d4] bg-clip-text text-transparent">
                        Marcos Andrés Travaglini
                    </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-900 dark:text-[#d0d0ff] font-bold">
                    Desarrollador Web Frontend
                </p>
            </div>
            <ButtonCV />
        </div>
    )
}