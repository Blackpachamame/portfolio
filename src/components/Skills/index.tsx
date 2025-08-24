import { motion } from 'framer-motion';
import { skills } from '../../assets/data';

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex w-full flex-col items-center gap-8 sm:max-w-[768px]">
      <h2 className="text-xl font-extrabold sm:text-2xl md:text-3xl">Skills</h2>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative inline-block" tabIndex={0}>
            <figure className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-solid border-[#d9dae2] bg-[rgba(243,243,243,.3)] shadow-lg transition duration-300 md:h-20 md:w-20 dark:border-[#242636] dark:bg-[#11121b]">
              <img
                src={skill.imgSkill}
                width={48}
                height={48}
                alt={`Logo ${skill.nombre}`}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </figure>

            <div className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 rounded-[5px] bg-[#BFBFD9] px-3.5 py-1.5 text-center text-sm leading-4 font-semibold opacity-0 transition duration-300 group-focus-within:opacity-100 group-hover:opacity-100 dark:bg-[#11121b]">
              <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#BFBFD9] dark:bg-[#11121b]" />
              {skill.nombre}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
