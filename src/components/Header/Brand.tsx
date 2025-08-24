import { useState, useEffect } from 'react';
import Redes from './Redes';
import logoWhite from './../../assets/logoLight.png';
import logoBlack from './../../assets/logoDark.png';
import { NavLink } from 'react-router-dom';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function Brand() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative flex w-full items-center justify-between lg:absolute lg:inset-x-10 lg:w-auto">
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-medium uppercase">
          {theme === 'light' ? (
            <img src={logoBlack} alt="logo" width={32} height={32} />
          ) : (
            <img src={logoWhite} alt="logo" width={32} height={32} />
          )}
        </NavLink>
      </div>
      <Redes theme={theme} handleChangeTheme={handleChangeTheme} />
    </div>
  );
}
