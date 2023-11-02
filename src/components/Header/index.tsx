import Brand from "./Brand"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="bg-gradient-to-tr from-[rgba(138,60,60,.2)] to-transparent text-rose-950 
        dark:from-[rgba(78,89,192,.2)] dark:text-slate-300 border border-solid border-[#e2d9df] dark:border-[#242636] rounded-2xl  mb-3 relative z-10 text-gray-900 transition duration-300">
            <div className="px-6 lg:px-10 py-6 flex flex-col justify-center relative">
                <Brand />
                <div className="dark:bg-gray-800 bg-[#dbcbd7] block lg:hidden h-px my-5 -mx-6"></div>
                <Navbar />
            </div>
        </header>
    );
}