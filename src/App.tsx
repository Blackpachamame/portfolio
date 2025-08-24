import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <main className="mx-auto my-0 flex min-h-screen max-w-screen-xl flex-col p-4 md:p-6">
        <div className="pointer-events-none fixed inset-0 bg-[rgba(60,62,138,.1)] dark:bg-[#11121b]"></div>
        <Header />
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}
