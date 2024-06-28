import { useEffect, useState } from "react";
import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";

const App = () => {

  const [isVisivle, setIsVisible] = useState<boolean>(true);

  const onScroll = (): void => {
    const position = window.scrollY;
    position > 570 ? setIsVisible(false) : setIsVisible(true);
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <>
    {(!isVisivle) && (
      <div className="w-screen bg-slate-200/50 fixed z-50">
        <HeaderNavbar />
      </div>
    )}
    <div className="flex flex-col min-h-screen mx-1 py-2">
      <header>
          <div className="bg-slate-200/50 rounded-md px-3 py-2">
            <HeaderContent />
          </div>
      </header>
      <main>
        <div className="py-5">
          <MainContent />
        </div>
      </main>
      <footer>
      </footer>
    </div>
    </>
  );
};

export default App;