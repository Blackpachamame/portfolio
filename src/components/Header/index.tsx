import Brand from './Brand';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative z-10 mb-3 rounded-2xl border border-solid border-[#d9dae2] bg-gradient-to-tr from-[rgba(60,62,138,.1)] to-transparent text-indigo-950 transition duration-300 dark:border-[#242636] dark:from-[rgba(78,89,192,.2)] dark:text-slate-300">
      <div className="relative flex flex-col justify-center px-4 py-5 lg:px-10 lg:py-6">
        <Brand />
        <div className="-mx-4 my-5 block h-px bg-[#cbcddb] lg:hidden dark:bg-gray-800"></div>
        <Navbar />
      </div>
    </header>
  );
}
