import { BsDownload } from "react-icons/bs";

export default function ButtonCV() {
    return (
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3
        font-semibold text-gray-950 dark:text-white bg-indigo-300 dark:bg-indigo-600 dark:border-[#242636] 
        rounded-full cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-indigo-400
        dark:hover:bg-indigo-700 transition duration-300">
            Curriculum
            <BsDownload />
        </a>
    )
}