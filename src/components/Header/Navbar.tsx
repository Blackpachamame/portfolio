import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="self-center flex items-center justify-center space-x-4 font-medium order-last flex-basis-[100%] md:order-none relative z-10 text-sm sm:text-xl">
            <NavLink to="/sobremi" className={({ isActive }) => isActive ? "text-[#2d3f66] dark:text-[#d6c0bb] duration-500" : "hover:text-[#334977] dark:hover:text-[#bbaeae] duration-500"}>Sobre mi</NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "text-[#2d3f66] dark:text-[#d6c0bb] duration-500" : "hover:text-[#334977] dark:hover:text-[#bbaeae] duration-500"}>Proyectos</NavLink>
            <NavLink to="/educacion" className={({ isActive }) => isActive ? "text-[#2d3f66] dark:text-[#d6c0bb] duration-500" : "hover:text-[#334977] dark:hover:text-[#bbaeae] duration-500"}>Educación</NavLink>
        </div>
    )
}
export default Navbar