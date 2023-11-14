import { useState } from "react";
import BoxProyecto from "./BoxProyecto";
import Skills from "./Skills";
import { proyectos } from "../../assets/data";

const arraySkills: string[] = [];

function Proyectos() {
  const [projects, setProjects] = useState(proyectos);
  const [tecnologias, setTecnologias] = useState(arraySkills);

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
    <div className="flex flex-col items-center gap-12">
      <Skills obtenerSkill={obtenerSkill} />
      <div className="grid justify-center items-stretch gap-4 proyecto__container">
        {projects.map((proyecto) => (
          <BoxProyecto key={proyecto.id} data={proyecto} />
        ))}
      </div>
    </div>
  );
}
export default Proyectos;
