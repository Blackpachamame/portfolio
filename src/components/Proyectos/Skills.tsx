import { MouseEvent } from "react";
// import DynamicIcon from "./DynamicIcon";
import { skills } from "../../assets/data";

type HandleSkill = {
    obtenerSkill: (event: string) => void;
}

function Skills({ obtenerSkill }: HandleSkill) {
    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, skill: string) => {
        event.currentTarget.classList.toggle('activo');
        obtenerSkill(skill)
    };

    return (
        <div className="flex justify-center flex-wrap gap-5">
            {skills.map((skill) => (
                <div key={skill.id} className="group relative inline-block">
                    <button onClick={(e) => handleClick(e, skill.nombre)} aria-label="Mandar nombre skill"
                        className="w-16 h-16 flex justify-center items-center bg-white dark:bg-[#11121b] border border-solid border-[#d9dae2] dark:border-[#242636] rounded-2xl shadow-lg">
                        <img src={skill.imgSkill} width="32px" height="32px" />
                        {/* <DynamicIcon icon={skill.icon} style={{ fontSize: "32px" }} /> */}
                    </button>
                    <div className="bg-[#BFBFD9] dark:bg-[#11121b] absolute top-full left-1/2 z-20 mt-3 
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
export default Skills