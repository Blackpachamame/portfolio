import Brand from "./Brand"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="dark:bg-gray-900 dark:text-white bg-white rounded-2xl mb-3 relative z-10 text-gray-900 transition duration-300">
            <div className="px-6 lg:px-10 py-6 flex flex-col justify-center relative">
                <Brand />
                <div className="dark:bg-gray-800 bg-gray-300 block lg:hidden h-px my-5 -mx-6"></div>
                <Navbar />
            </div>
        </header>
    );
}