import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        className:
          'rounded-xl text-sm shadow-lg dark:bg-[#11121b] dark:text-slate-100 motion-reduce:transition-none motion-reduce:animate-none',
      }}
    />
  </StrictMode>,
);
