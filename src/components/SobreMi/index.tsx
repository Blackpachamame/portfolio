import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center">
      <h2 className="mb-5 text-xl font-extrabold sm:text-2xl md:text-3xl">Sobre mi</h2>
      <p className="mb-3 md:text-lg">
        Soy Frontend Developer Junior con formación universitaria y experiencia práctica en proyectos web utilizando React, TypeScript, Angular, Tailwind CSS y APIs REST.
      </p>
      <p className="md:text-lg">
        He participado en equipos de desarrollo construyendo interfaces responsivas, componentes reutilizables, ajustes visuales, formularios, integraciones y mejoras sobre productos existentes. Me interesa especialmente trabajar en proyectos de producto, SaaS o aplicaciones web donde pueda combinar criterio visual, orden técnico y aprendizaje continuo.
      </p>
      <p className="md:text-lg">
        Actualmente busco una oportunidad como Frontend Developer Junior, idealmente en un equipo con code review, acompañamiento senior y buenas prácticas de desarrollo.
      </p>
    </motion.section>
  );
}
