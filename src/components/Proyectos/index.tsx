import BoxProyecto from "./BoxProyecto";

function Proyectos() {
  return (
    <div className="grid justify-center items-stretch proyecto__container gap-4">
      <BoxProyecto />
      <BoxProyecto />
      <BoxProyecto />
    </div>
  );
}
export default Proyectos;
