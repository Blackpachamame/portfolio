import { FiCode, FiGlobe } from "react-icons/fi";

interface EmployeeProps {
    data: {
        id: string,
        imgProyecto: string,
        nombre: string,
        tecnologias: string[],
        codigo: string,
        sitio: string,
    };
}

export default function BoxProyecto({ data }: EmployeeProps) {
    return (
        <div className="flex flex-col justify-between items-center border border-solid border-[#d9dae2] dark:border-[#292b3d] rounded-2xl
        bg-gradient-to-t from-[rgba(124,130,177,.12)] to-[rgba(17,18,27,0)] overflow-hidden">
            <figure className="overflow-hidden">
                <img className="w-full scale-100 hover:scale-125 transition duration-300 ease-in-out"
                    src={data.imgProyecto}
                    alt="newsletter preview" />
            </figure>
            <div className="w-full text-center font-semibold px-4 pt-4">
                <h3 className="text-xl">{data.nombre}</h3>
            </div>
            <div className="p-4">
                <div className="w-full flex flex-wrap gap-2 text-center font-semibold px-4 py-2">
                    {data.tecnologias.map((tecnologia) => (
                        <span key={tecnologia} className="flex gap-2 items-center justify-center 
                bg-[rgba(60,62,138,.2)] dark:bg-gray-900 text-md text-gray-900 dark:text-slate-100 
                px-3 py-1 rounded-2xl shadow-md text-sm">{tecnologia}</span>
                    ))}
                </div>
                <div className="w-full flex justify-center gap-4 pt-2">
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