import { BsDownload } from "react-icons/bs";

function ButtonCV() {
    return (
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3
        font-semibold text-white bg-[#865b69] dark:bg-indigo-600 dark:border-[#242636] 
        rounded-full cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-rose-800
        dark:hover:bg-indigo-700 transition duration-300">
            Curriculum
            <BsDownload />
        </a>
    )
}
export default ButtonCV