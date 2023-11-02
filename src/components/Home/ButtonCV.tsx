import { BsDownload } from "react-icons/bs";

function ButtonCV() {
    return (
        <a href="#_" className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white 
        bg-[#b18484] dark:bg-[#4f81ff] border border-solid border-[#e2d9df] dark:border-[#242636]
        rounded-full cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-[#a17575]
        dark:hover:bg-[#4375f1] transition duration-300">
            Curriculum
            <BsDownload />
        </a>
    )
}
export default ButtonCV