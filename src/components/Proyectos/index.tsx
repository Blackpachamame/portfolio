import BoxProyecto from "./BoxProyecto";
import Skills from "./Skills";
import { proyectos } from "../../assets/data";

function Proyectos() {
  return (
    <div className="flex flex-col items-center gap-12">
      <Skills />
      <div className="grid justify-center items-stretch proyecto__container gap-4">
        {proyectos.map((proyecto) => (
          <BoxProyecto key={proyecto.id} data={proyecto} />
        ))}
      </div>
    </div>
  );
}
export default Proyectos;
