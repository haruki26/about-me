import { ChangeEvent, Children, ReactNode, useEffect, useRef, useState } from "react";

import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import DrawerMenu from "./components/DrawerMenu";
import FooterContent from "./components/FooterContent";
import useNavAnimation from "./hooks/useNavAnimation";
import useOnScreen from "./hooks/useOnScreen";

import { Contents } from "./types/Contents";
import { HeaderNavAnimation } from "./types/HeaderNavAnimation";
import { TargetViewPosition } from "./types/TargetViewPosition";

type Props = {
    content: Contents;
    children: ReactNode;
}

const PageFrame = ({content, children}: Props) => {
    const targetRef = useRef(null)
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

        if (content === "Home") {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
        
        setIsNavAnimate(useNavAnimation(isVisivle))
    }, [targetViewPosition, content])

    const changeDrawerState = (event: ChangeEvent<HTMLInputElement>) => {
        setIsDrawerState(event.target.checked)
    }

    const [header, main] = Children.toArray(children);
    
    return (
        <div className="w-screen overflow-x-hidden">
            <div className={`w-full sticky top-0 z-50 ${isNavAnimate}`}>
                <HeaderNavbar drawerState={isDrawerState} contentState={content} />
            </div>
            <div className="drawer w-full">
                <input id="drawer-menu" type="checkbox" checked={isDrawerState} className="drawer-toggle" onChange={changeDrawerState} readOnly />
                <div className="drawer-content">
                    <div className="flex flex-col">
                        <header ref={targetRef}>
                            <div className="mx-2">
                                {header}
                            </div>
                        </header>
                        <main>
                            <div className="py-5">
                                {main}
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
        </div>
    );
};

export default PageFrame;