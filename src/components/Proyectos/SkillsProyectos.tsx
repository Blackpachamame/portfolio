import { skills } from '../../assets/data';

type HandleSkill = {
  toggleSkill: (skill: string) => void;
  tecnologiasActivas: string[];
};

export default function SkillsProyectos({ toggleSkill, tecnologiasActivas }: HandleSkill) {
  const skillsProyect = skills.filter((skill) => skill.boxProject === true);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {skillsProyect.map((skill) => {
        const activo = tecnologiasActivas.includes(skill.nombre);
        return (
          <div key={skill.id} className="group relative inline-block">
            <button
              onClick={() => toggleSkill(skill.nombre)}
              aria-label={`Filtrar por ${skill.nombre}`}
              aria-pressed={activo}
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-solid border-[#d9dae2] bg-[rgba(243,243,243,.3)] shadow-lg transition duration-300 md:h-16 md:w-16 dark:border-[#242636] dark:bg-[#11121b] ${activo ? 'activo' : ''}`}>
              <img src={skill.imgSkill} width="32px" height="32px" alt={'Logo ' + skill.nombre} />
            </button>
            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 rounded-[5px] bg-[#BFBFD9] px-3.5 py-1.5 text-center text-sm leading-4 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 dark:bg-[#11121b]">
              <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#BFBFD9] dark:bg-[#11121b]"></span>
              {skill.nombre}
            </div>
          </div>
        );
      })}
    </div>
  );
}
