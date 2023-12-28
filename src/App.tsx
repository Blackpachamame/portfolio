import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <main className="max-w-screen-xl min-h-screen flex flex-col my-0 mx-auto p-4 md:p-6">
        <div className="fixed inset-0 bg-[rgba(60,62,138,.1)] dark:bg-[#11121b]"></div>
        <Header />
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  )
}
