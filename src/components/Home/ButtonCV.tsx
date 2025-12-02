import { BsDownload } from 'react-icons/bs';

export default function ButtonCV() {
  return (
    <a
      href="https://drive.google.com/file/d/1v9yaJpAvTlxXSyOGlfLP2_rNkzD6Sbk2/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Curriculum en una nueva pestaña"
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-transparent bg-indigo-300 px-4 py-2 font-semibold text-gray-950 transition duration-300 select-none hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:mb-0 sm:px-5 sm:py-3 dark:border-[#242636] dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700">
      Curriculum
      <BsDownload aria-hidden="true" />
    </a>
  );
}
