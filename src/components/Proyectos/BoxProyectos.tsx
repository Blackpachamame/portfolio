import { FiCode, FiGlobe } from "react-icons/fi";

interface EmployeeProps {
    data: {
        id: string,
        imgProyecto: string,
        nombre: string,
        tecnologias: string[],
        codigo: string,
        sitio?: string,
        logo: string,
    };
}

export default function BoxProyectos({ data }: EmployeeProps) {
    return (
        <div className="flex flex-col justify-between items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        bg-gradient-to-t from-[rgba(124,130,177,.12)] to-[rgba(17,18,27,0)] overflow-hidden">
            <figure className="relative overflow-hidden">
                <img className="w-full scale-100 hover:scale-125 transition duration-300 ease-in-out"
                    src={data.imgProyecto}
                    alt={"Imagen previa del proyecto " + data.nombre} />
                <div className="w-12 h-12 border-2 border-[#11121b] absolute bottom-0 right-2/4 translate-x-[50%] translate-y-[24px] z-10 flex justify-center items-center bg-[#d0d1e3] dark:bg-[#1e2137] rounded-full"></div>
                <div className="w-full h-0.5 absolute bottom-0 right-0 flex bg-[#11121b]"></div>
            </figure>
            <div className="relative w-full flex flex-col justify-between items-center grow gap-4 p-4 pt-8">
                <div className="w-12 h-12 absolute top-0 right-2/4 translate-x-[50%] translate-y-[-24px] z-10 flex justify-center items-center bg-[transparent] rounded-full">
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
                            href={data.sitio}><FiGlobe style={{ fontSize: "16px" }} />Online
                        </a>
                    }
                    <a className="flex items-center gap-2"
                        href={data.codigo}><FiCode style={{ fontSize: "16px" }} />Código
                    </a>
                </div>
            </div>
        </div>
    )
}