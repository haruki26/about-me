import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";
import { useEffect, useRef, useState } from "react";
import useNavAnimation from "./hooks/useNavAnimation";
import useOnScreen from "./hooks/useOnScreen";
import { HeaderNavAnimation } from "./types/HeaderNavAnimation";
import { TargetViewPosition } from "./types/TargetViewPosition";
import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import DrawerMenu from "./components/DrawerMenu";

const App = () => {
  const targetRef = useRef(null)
  const [isVisivle, setIsVisible] = useState<boolean>(false);
  const [isNavAnimate, setIsNavAnimate] = useState<HeaderNavAnimation>(useNavAnimation(isVisivle))

  const targetViewPosition: TargetViewPosition = useOnScreen(targetRef);

  useEffect(() => {
      if (targetViewPosition === "ABOVE_VIEWPORT") {
          setIsVisible(false)
      } else {
          setIsVisible(true)
      }
      
      setIsNavAnimate(useNavAnimation(isVisivle))
  }, [targetViewPosition])

  return (
    <>
    <div className="drawer">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className={`fixed z-50 ${isNavAnimate}`}>
          <HeaderNavbar />
        </div>
        <div className="flex flex-col">
          <header ref={targetRef}>
            <div className="">
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
      </div>
      <DrawerMenu />
    </div>
    </>
  );
};

export default App;