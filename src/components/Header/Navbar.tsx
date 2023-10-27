function Navbar() {
    return (
        <div className="self-center flex items-center justify-center space-x-4 text-xl font-medium order-last flex-basis-[100%] md:order-none relative z-10">
            <a href="/mix?format=hex" className="">About Me</a>
            <a href="/blend?format=hex" className="">Proyectos</a>
            <a href="/modify?format=hex" className="">Educación</a>
        </div>
    )
}
export default Navbar