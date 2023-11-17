import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="min-h-[32px] self-center flex justify-center items-center gap-4 font-semibold order-last flex-basis-[100%] md:order-none relative z-10 text-sm min-[475px]:text-lg sm:text-xl">
            <NavLink to="/sobremi" className={({ isActive }) => isActive ? "text-indigo-800 dark:text-white duration-500" : "hover:text-indigo-900 dark:hover:text-slate-200 duration-500"}>Sobre mi</NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "text-indigo-800 dark:text-white duration-500" : "hover:text-indigo-900 dark:hover:text-slate-200 duration-500"}>Proyectos</NavLink>
            {/* <NavLink to="/educacion" className={({ isActive }) => isActive ? "text-indigo-800 dark:text-white duration-500" : "hover:text-indigo-900 dark:hover:text-slate-200 duration-500"}>Educación</NavLink> */}
        </nav>
    )
}