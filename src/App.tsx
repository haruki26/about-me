import { useEffect, useState } from "react";
import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";

const App = () => {
  const [isVisivle, setIsVisible] = useState<boolean>(true);
  const [isNavAnimate, setIsNavAnimate] = useState<string>("animate-text-blur-out");

  const onScroll = (): void => {
    const position = window.scrollY;
    position > 570 ? setIsVisible(false) : setIsVisible(true);
    !isVisivle ? setIsNavAnimate("animate-text-focus-in") : setIsNavAnimate("animate-text-blur-out");
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <>
    <div className={`fixed z-50 ${isNavAnimate}`}>
      <HeaderNavbar />
    </div>
    <div className="flex flex-col min-h-screen">
      <header>
          <div className="bg-slate-200/50 rounded-md m-2 px-3 py-2">
            <HeaderContent />
          </div>
      </header>
      <main>
        <div className="py-5">
          <MainContent />
        </div>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
    </>
  );
};

export default App;