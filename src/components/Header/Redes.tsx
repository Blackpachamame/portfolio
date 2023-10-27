import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin, BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function Redes() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")!.classList.add("dark");
        } else {
            document.querySelector("html")!.classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="flex items-center gap-5">
            <a href="https://github.com/Blackpachamame" target="_blank" rel="noopener noreferrer" aria-label="Ver Github"><BsGithub style={{ fontSize: "24px" }} /></a>
            <a href="https://www.linkedin.com/in/marcos-travaglini/" target="_blank" rel="noopener noreferrer" aria-label="Ver Linkedin"><BsLinkedin style={{ fontSize: "24px" }} /></a>
            <button onClick={handleChangeTheme}>
                {theme === "light" ? (
                    <BsFillMoonStarsFill style={{ fontSize: "24px" }} />
                ) : (
                    <BsFillSunFill style={{ fontSize: "24px" }} />
                )}
            </button>
        </div>
    )
}
export default Redes