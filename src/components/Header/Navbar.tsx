import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="self-center flex items-center justify-center space-x-4 text-xl font-medium order-last flex-basis-[100%] md:order-none relative z-10">
            <NavLink to="/sobremi" className={({ isActive }) => isActive ? "text-[#d12c4f] dark:text-[#ff1f4f]" : ""}>Sobre Mi</NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "text-[#d12c4f] dark:text-[#ff1f4f]" : ""}>Proyectos</NavLink>
            <NavLink to="/educacion" className={({ isActive }) => isActive ? "text-[#d12c4f] dark:text-[#ff1f4f]" : ""}>Educación</NavLink>
        </div>
    )
}
export default Navbar