import { MouseEvent } from "react";
import { skills } from "../../assets/data";

type HandleSkill = {
    obtenerSkill: (event: string) => void;
}

export default function SkillsProyectos({ obtenerSkill }: HandleSkill) {
    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, skill: string) => {
        event.currentTarget.classList.toggle('activo');
        obtenerSkill(skill)
    };

    return (
        <div className="flex justify-center flex-wrap gap-5">
            {skills.map((skill) => (
                <div key={skill.id} className="group relative inline-block">
                    <button onClick={(e) => handleClick(e, skill.nombre)} aria-label="Enviar skill"
                        className="w-14 h-14 md:w-16 md:h-16 flex justify-center items-center bg-[rgba(243,243,243,.3)] dark:bg-[#11121b] 
                        border border-solid border-[#d9dae2] dark:border-[#242636] rounded-2xl shadow-lg transition duration-300">
                        <img src={skill.imgSkill} width="32px" height="32px" alt={"Logo " + skill.nombre} />
                    </button>
                    <div className="bg-[#BFBFD9] dark:bg-[#11121b] absolute top-full left-1/2 z-20 pointer-events-none mt-3 
                -translate-x-1/2 rounded-[5px] py-1.5 px-3.5 text-center text-sm leading-4 font-semibold 
                opacity-0 group-hover:opacity-100 transition duration-300">
                        <span className="bg-[#BFBFD9] dark:bg-[#11121b] absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45"></span>
                        {skill.nombre}
                    </div>
                </div>
            ))}
        </div>
    )
}