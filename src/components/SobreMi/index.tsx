import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="component text-center">
      <h2 className="mb-5 text-xl font-extrabold sm:text-2xl md:text-3xl">Sobre mi</h2>
      <p className="mb-3 md:text-lg">
        ¡Saludos! Mi nombre es Marcos Andrés Travaglini, vivo en Neuquén, Argentina. Soy
        desarrollador frontend y estoy buscando mi primera oportunidad laboral en IT. Obtuve el
        título de Técnico universitario en Desarrollo Web en la Universidad Nacional del Comahue.
      </p>
      <p className="md:text-lg">
        Me considero una persona comprometida, honesta, responsable, con mucha curiosidad en saber
        cómo funciona todo, muchas ganas de aprender y seguir profundizando en los conocimientos que
        ya poseo.
      </p>
    </motion.section>
  );
}
