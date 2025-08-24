import { FadeSection } from '../ui/FadeSection';
import ButtonCV from './ButtonCV';

export default function Principal() {
  return (
    <FadeSection className="flex w-full flex-col items-center justify-center text-center">
      <h1 className="text-xl font-extrabold uppercase min-[425px]:text-2xl sm:text-3xl md:text-4xl">
        <span className="bg-gradient-to-r from-rose-900 to-blue-900 bg-clip-text text-transparent dark:from-[#9796f0] dark:to-[#fbc7d4]">
          Marcos Andrés Travaglini
        </span>
      </h1>
      <p className="text-lg font-bold text-slate-900 min-[425px]:text-xl md:text-2xl lg:text-3xl dark:text-[#d0d0ff]">
        Desarrollador Web Frontend
      </p>
      <ButtonCV />
    </FadeSection>
  );
}
