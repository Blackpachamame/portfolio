function Navbar() {
    return (
        <div className="self-center flex items-center justify-center space-x-4 text-xl font-medium order-last flex-basis-[100%] md:order-none relative z-10">
            <a href="/mix?format=hex" className="">Mix</a>
            <a href="/info?format=hex" className="text-primary-clamped">Info</a>
            <a href="/blend?format=hex" className="">Blend</a>
            <a href="/modify?format=hex" className="">Modify</a>
        </div>
    )
}
export default Navbar