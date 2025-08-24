import { BsGithub, BsLinkedin, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

type ChangeTheme = {
  theme: string;
  handleChangeTheme: () => void;
};

export default function Redes({ theme, handleChangeTheme }: ChangeTheme) {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://github.com/Blackpachamame"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver Github">
        <BsGithub className="text-[24px]" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-travaglini/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver Linkedin">
        <BsLinkedin className="text-[24px]" aria-hidden="true" />
      </a>
      <button onClick={handleChangeTheme} aria-label="Toggle theme" className="cursor-pointer">
        {theme === 'light' ? (
          <BsFillMoonStarsFill className="text-[24px]" aria-hidden="true" />
        ) : (
          <BsFillSunFill className="text-[24px]" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
