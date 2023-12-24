import { FiCode, FiGlobe } from "react-icons/fi";

interface EmployeeProps {
    data: {
        id: string,
        imgProyecto: string,
        nombre: string,
        tecnologias: string[],
        descripcion: string,
        codigo: string,
        sitio?: string,
        logo: string,
    };
}

export default function BoxProyectos({ data }: EmployeeProps) {
    return (
        <div className="flex flex-col justify-between items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        overflow-hidden">
            <div className="group relative overflow-hidden">
                <img className="w-full scale-100 group-hover:scale-125 transition duration-300 ease-in-out"
                    src={data.imgProyecto}
                    alt={"Imagen previa del proyecto " + data.nombre} />
                {/* Descripcion proyecto */}
                <div className="absolute inset-0 z-10 text-slate-100 bg-[rgba(60,62,138,.9)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="w-full h-full flex justify-center items-center p-2">
                        <p className="text-center">{data.descripcion}</p>
                    </div>
                </div>
                {/* Borde arriba del logo */}
                <div className="w-12 h-12 absolute bottom-0 right-2/4 translate-x-[50%] translate-y-[24px] z-10 flex justify-center items-center bg-[rgb(208,209,227)] dark:bg-[rgb(23,25,44)] rounded-full"></div>
                {/* Borde izquierdo del logo */}
                <div className="absolute w-4 h-4 bottom-0 right-[50%] translate-x-[-23px] z-10 bg-transparent shadow-[8px_8px_0px_rgb(208,209,227)] dark:shadow-[8px_8px_0px_rgb(23,25,44)] rounded-full"></div>
                {/* Borde derecho del logo */}
                <div className="absolute w-4 h-4 bottom-0 left-[50%] translate-x-[23px] z-10 bg-transparent shadow-[-8px_8px_0px_rgb(208,209,227)] dark:shadow-[-8px_8px_0px_rgb(23,25,44)] rounded-full"></div>
            </div>
            <div className="relative w-full bg-gradient-to-b from-[rgb(208,209,227)] to-[rgba(60,62,138,.2)] dark:from-[rgb(23,25,44)] dark:to-[rgba(124,130,177,.12)] flex flex-col justify-between items-center grow gap-4 p-4 pt-8">
                <div className="w-12 h-12 absolute top-0 right-2/4 translate-x-[50%] translate-y-[-24px] z-10 flex justify-center items-center bg-transparent rounded-full">
                    <figure className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={data.logo} alt={"Logo proyecto " + data.nombre} width="32" height="32" />
                    </figure>
                </div>
                <div className="w-full text-center font-semibold">
                    <h3 className="text-xl">{data.nombre}</h3>
                </div>
                <div className="w-full flex justify-center items-center flex-wrap gap-2 text-center font-semibold">
                    {data.tecnologias.map((tecnologia) => (
                        <span key={tecnologia} className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-xs text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md">{tecnologia}</span>
                    ))}
                </div>
                <div className="w-full flex justify-center gap-4">
                    {data.sitio &&
                        <a className="flex items-center gap-2"
                            href={data.sitio} target="_blank"><FiGlobe style={{ fontSize: "16px" }} />Online
                        </a>
                    }
                    <a className="flex items-center gap-2"
                        href={data.codigo} target="_blank"><FiCode style={{ fontSize: "16px" }} />Código
                    </a>
                </div>
            </div>
        </div>
    )
}