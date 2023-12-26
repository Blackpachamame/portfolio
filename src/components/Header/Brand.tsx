import { useState, useEffect } from "react";
import Redes from "./Redes"
import logoWhite from "./../../assets/logoLight.png"
import logoBlack from "./../../assets/logoDark.png"
import { NavLink } from "react-router-dom";

export default function Brand() {
    const themePrefers = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    function getInitialTheme() {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : themePrefers;
    }

    const handleChangeTheme = () => {
        setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="relative lg:absolute lg:inset-x-10 w-full lg:w-auto flex items-center justify-between">
            <div className="flex items-center">
                <NavLink to="/" className="flex items-center gap-2 text-2xl font-medium uppercase text-primary-clamped">
                    {theme === "light" ? (
                        <img src={logoBlack} alt="logo" width="32" height="32" />
                    ) : (
                        <img src={logoWhite} alt="logo" width="32" height="32" />
                    )}
                </NavLink>
            </div>
            <Redes theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
    )
}