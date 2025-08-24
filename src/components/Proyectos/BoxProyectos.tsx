import { FiCode, FiGlobe } from 'react-icons/fi';

interface EmployeeProps {
  data: {
    id: string;
    imgProyecto: string;
    nombre: string;
    tecnologias: string[];
    descripcion: string;
    codigo?: string;
    sitio?: string;
    logo: string;
  };
}

export default function BoxProyectos({ data }: EmployeeProps) {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-solid border-[#d9dae2] dark:border-[#292b3d]">
      <div className="group relative overflow-hidden">
        <img
          className="w-full scale-100 transition duration-300 ease-in-out group-hover:scale-125"
          src={data.imgProyecto}
          alt={'Imagen previa del proyecto ' + data.nombre}
        />
        {/* Descripcion proyecto */}
        <div className="absolute inset-0 z-10 bg-[rgba(60,62,138,.9)] text-slate-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-full w-full items-center justify-center p-2">
            <p className="text-center">{data.descripcion}</p>
          </div>
        </div>
        {/* Borde arriba del logo */}
        <div className="absolute right-2/4 bottom-0 z-10 flex h-12 w-12 translate-x-[50%] translate-y-[24px] items-center justify-center rounded-full bg-[rgb(208,209,227)] dark:bg-[rgb(23,25,44)]"></div>
        {/* Borde izquierdo del logo */}
        <div className="absolute right-[50%] bottom-0 z-10 h-4 w-4 translate-x-[-23px] rounded-full bg-transparent shadow-[8px_8px_0px_rgb(208,209,227)] dark:shadow-[8px_8px_0px_rgb(23,25,44)]"></div>
        {/* Borde derecho del logo */}
        <div className="absolute bottom-0 left-[50%] z-10 h-4 w-4 translate-x-[23px] rounded-full bg-transparent shadow-[-8px_8px_0px_rgb(208,209,227)] dark:shadow-[-8px_8px_0px_rgb(23,25,44)]"></div>
      </div>
      <div className="relative flex w-full grow flex-col items-center justify-between gap-4 bg-gradient-to-b from-[rgb(208,209,227)] to-[rgba(60,62,138,.2)] p-4 pt-8 dark:from-[rgb(23,25,44)] dark:to-[rgba(124,130,177,.12)]">
        <div className="absolute top-0 right-2/4 z-10 flex h-12 w-12 translate-x-[50%] translate-y-[-24px] items-center justify-center rounded-full bg-transparent">
          <figure className="h-8 w-8 overflow-hidden rounded-full">
            <img src={data.logo} alt={'Logo proyecto ' + data.nombre} width="32" height="32" />
          </figure>
        </div>
        <div className="w-full text-center font-semibold">
          <h3 className="text-xl">{data.nombre}</h3>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-center font-semibold">
          {data.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[rgba(60,62,138,.2)] px-3 py-1 text-xs text-gray-900 shadow-md dark:bg-gray-900 dark:text-slate-100">
              {tecnologia}
            </span>
          ))}
        </div>
        <div className="flex w-full justify-center gap-4">
          {data.sitio && (
            <a
              className="flex items-center gap-2"
              href={data.sitio}
              target="_blank"
              rel="noreferrer">
              <FiGlobe style={{ fontSize: '16px' }} />
              Online
            </a>
          )}
          {data.codigo && (
            <a
              className="flex items-center gap-2"
              href={data.codigo}
              target="_blank"
              rel="noreferrer">
              <FiCode style={{ fontSize: '16px' }} />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
