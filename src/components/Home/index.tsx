import ButtonCV from "./ButtonCV";
import { motion } from "framer-motion";

export default function Principal() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-center items-center text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
                <span className="bg-gradient-to-r from-rose-900 to-blue-900 dark:from-[#9796f0] dark:to-[#fbc7d4] bg-clip-text text-transparent">
                    Marcos Andrés Travaglini
                </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-900 dark:text-[#d0d0ff] font-bold">
                Desarrollador Web Frontend
            </p>
            <ButtonCV />
        </motion.section>
    )
}