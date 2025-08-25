import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function Contacto() {
  const [state, handleSubmit] = useForm('mnnbaggn');
  const formRef = useRef<HTMLFormElement>(null);
  const loadingId = useRef<ReturnType<typeof toast.loading> | null>(null);

  useEffect(() => {
    if (!state.submitting && loadingId.current) {
      toast.dismiss(loadingId.current);
      loadingId.current = null;
    }
    if (state.succeeded) {
      toast.success('¡Mensaje enviado! Te responderé pronto.');
      formRef.current?.reset();
      return;
    } else if (state.errors) toast.error('Ups, hubo un problema. Revisá los campos.');
  }, [state.submitting, state.succeeded, state.errors]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = formRef.current;
    if (!form) return;
    if (!form.reportValidity()) return; // validación nativa del browser
    loadingId.current = toast.loading('Enviando…');
    await handleSubmit(e); // Formspree hace preventDefault internamente
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full text-center">
      <h2 className="mb-5 text-xl font-extrabold sm:text-2xl md:text-3xl">Contacto</h2>

      <form
        ref={formRef}
        onSubmit={(e) => {
          void onSubmit(e);
        }}
        className="mx-auto grid w-full max-w-xl gap-4 text-left"
        aria-busy={state.submitting}>
        {/* Honeypot anti-bot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        {/* Asunto opcional */}
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />

        <div className="grid gap-1.5">
          <label htmlFor="name" className="font-semibold">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Tu nombre"
            className="rounded-xl border border-[#d9dae2] bg-white px-3 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-[#242636] dark:bg-[#11121b] dark:text-slate-100"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="tu@correo.com"
            className="rounded-xl border border-[#d9dae2] bg-white px-3 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-[#242636] dark:bg-[#11121b] dark:text-slate-100"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="message" className="font-semibold">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={10}
            placeholder="¿En qué puedo ayudarte?"
            className="resize-y rounded-xl border border-[#d9dae2] bg-white px-3 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-[#242636] dark:bg-[#11121b] dark:text-slate-100"
          />
          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60">
          Enviar
        </button>
      </form>
    </motion.section>
  );
}
