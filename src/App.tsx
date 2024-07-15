import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import useNavAnimation from "./hooks/useNavAnimation";
import useOnScreen from "./hooks/useOnScreen";
import { HeaderNavAnimation } from "./types/HeaderNavAnimation";
import { TargetViewPosition } from "./types/TargetViewPosition";
import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import DrawerMenu from "./components/DrawerMenu";
import ProfielHead from "./components/headerComponents/ProfielHead";
import Profiel from "./components/Maincontents/Profiel";
import { Contents } from "./types/Contents";
import Contact from "./components/Maincontents/Contact";

const App: FC = () => {
  const targetRef = useRef(null)
  const [isContent, setIsContent] = useState<Contents>("Profiel")
  const [isVisivle, setIsVisible] = useState<boolean>(false);
  const [isNavAnimate, setIsNavAnimate] = useState<HeaderNavAnimation>(useNavAnimation(isVisivle))
  const [isDrawerState, setIsDrawerState] = useState<boolean>(false)

  const targetViewPosition: TargetViewPosition = useOnScreen(targetRef);

  useEffect(() => {
      if (targetViewPosition === "ABOVE_VIEWPORT") {
          setIsVisible(false)
      } else {
          setIsVisible(true)
      }

      if (isContent === "Home") {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setIsNavAnimate(useNavAnimation(isVisivle))
  }, [targetViewPosition, isContent])

  const changeDrawerState = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDrawerState(event.target.checked)
  }

  return (
    <>
    <div className={`sticky top-0 z-50 ${isNavAnimate}`}>
      <HeaderNavbar drawerState={isDrawerState} contentState={isContent} />
    </div>
    <div className="drawer w-screen">
      <input id="drawer-menu" type="checkbox" checked={isDrawerState} className="drawer-toggle" onChange={changeDrawerState} readOnly />
      <div className="drawer-content">
        <div className="flex flex-col">
          <header ref={targetRef}>
            <div className="mx-2">
              <ProfielHead />
            </div>
          </header>
          <main>
            <div className="py-5">
              <Profiel />
            </div>
          </main>
          <footer>
            <div className="w-full">
              <FooterContent />
            </div>
          </footer>
        </div>
      </div>
      <DrawerMenu />
    </div>
    </>
  );
};

export default App;