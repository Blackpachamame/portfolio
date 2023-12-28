import { useState } from "react";
import BoxProyectos from "./BoxProyectos";
import SkillsProyectos from "./SkillsProyectos";
import { proyectos } from "../../assets/data";
import { RiShareBoxFill } from "react-icons/ri";
import { motion } from "framer-motion";

const arraySkills: string[] = [];

export default function Proyectos() {
  const [tecnologias, setTecnologias] = useState(arraySkills);
  let projects;

  if (tecnologias.length > 0) {
    projects = verProyectos();
  } else {
    projects = proyectos;
  }

  function verProyectos() {
    const arrayProjects = proyectos.filter((proyecto) => existeSkill(proyecto.tecnologias, tecnologias));
    return arrayProjects;
  }

  function existeSkill(tecnoProyecto: string[], tecnoSkills: string[]) {
    let existe = false;
    for (let i = 0; i < tecnoSkills.length; i = i + 1) {
      existe = tecnoProyecto.includes(tecnoSkills[i]);
      if (!existe) {
        i = tecnoSkills.length;
      }
    }
    return existe;
  }

  function obtenerSkill(skill: string) {
    editarTecnologia(skill);
  }

  const editarTecnologia = (unaSkill: string) => {
    const encontrado = tecnologias.includes(unaSkill);
    if (!encontrado) {
      agregarSkill(unaSkill);
    } else {
      eliminarSkill(unaSkill);
    }
  }

  const agregarSkill = (unaSkill: string) => {
    setTecnologias([...tecnologias, unaSkill]);
  };

  const eliminarSkill = (unaSkill: string) => {
    const nuevasSkills = tecnologias.filter(
      (skill) => skill !== unaSkill
    );
    setTecnologias(nuevasSkills);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Proyectos</h2>
      <SkillsProyectos obtenerSkill={obtenerSkill} />
      <div className="grid justify-center items-stretch gap-4 grid-cols-16">
        {(projects.length > 0)
          ? projects.map((proyecto) => (
            <BoxProyectos key={proyecto.id} data={proyecto} />
          ))
          : <h3 className="text-xl">No se encontraron proyectos</h3>}
      </div>
      <a className="flex items-center gap-2 hover:underline underline-offset-2" href="https://github.com/Blackpachamame?tab=repositories" target="_blank" rel="noreferrer"><RiShareBoxFill /> Revisar todos los proyectos</a>
    </motion.section>
  );
}
