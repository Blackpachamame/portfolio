import { motion } from "framer-motion";
import { skills } from "../../assets/data";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full sm:max-w-[768px] flex flex-col items-center gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Skills</h2>
      <div className="flex justify-center flex-wrap gap-5">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative inline-block">
            <figure
              className="w-[70px] h-[70px] md:w-20 md:h-20 flex justify-center items-center bg-[rgba(243,243,243,.3)] dark:bg-[#11121b] 
                        border border-solid border-[#d9dae2] dark:border-[#242636] rounded-2xl shadow-lg transition duration-300">
              <img src={skill.imgSkill} width="48px" height="48px" alt={"Logo " + skill.nombre} />
            </figure>
            <div className="bg-[#BFBFD9] dark:bg-[#11121b] absolute top-full left-1/2 z-20 pointer-events-none mt-3 
                -translate-x-1/2 rounded-[5px] py-1.5 px-3.5 text-center text-sm leading-4 font-semibold 
                opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="bg-[#BFBFD9] dark:bg-[#11121b] absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45"></span>
              {skill.nombre}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
