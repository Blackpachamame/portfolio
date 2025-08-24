import { motion } from 'framer-motion';

export default function Contacto() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="component text-center">
      <h2 className="mb-5 text-xl font-extrabold sm:text-2xl md:text-3xl">Contacto</h2>
      <p className="mb-3 md:text-lg">Próximamente...</p>
    </motion.section>
  );
}
