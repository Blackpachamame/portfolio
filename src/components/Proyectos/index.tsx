import BoxProyecto from "./BoxProyecto";
import Skills from "./Skills";

function Proyectos() {
  return (
    <div className="flex flex-col items-center gap-12">
      <Skills />
      <div className="grid justify-center items-stretch proyecto__container gap-4">
        <BoxProyecto />
        <BoxProyecto />
        <BoxProyecto />
      </div>
    </div>
  );
}
export default Proyectos;
