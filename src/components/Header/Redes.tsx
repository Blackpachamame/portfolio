import { BsGithub, BsLinkedin, BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

type ChangeTheme = {
    theme: string,
    handleChangeTheme: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Redes({ theme, handleChangeTheme }: ChangeTheme) {
    return (
        <div className="flex items-center gap-5">
            <a href="https://github.com/Blackpachamame" target="_blank" rel="noopener noreferrer" aria-label="Ver Github"><BsGithub style={{ fontSize: "24px" }} /></a>
            <a href="https://www.linkedin.com/in/marcos-travaglini/" target="_blank" rel="noopener noreferrer" aria-label="Ver Linkedin"><BsLinkedin style={{ fontSize: "24px" }} /></a>
            <button onClick={handleChangeTheme} aria-label="Toggle theme">
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