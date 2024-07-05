import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { TargetViewPosition } from "../types/TargetViewPosition";
import FirstView from "./headerComponents/FirstView";
import HeaderNavbar from "./headerComponents/HeaderNavbar";
import useNavAnimation from "../hooks/useNavAnimation";
import { HeaderNavAnimation } from "../types/HeaderNavAnimation";

const HeaderContent = () => {
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
        <div className={`fixed z-50 ${isNavAnimate}`}>
            <HeaderNavbar />
        </div>
        <div ref={targetRef} className="px-3 py-2">
            <div className="w-full flex flex-col items-center">
                <div className="max-w-screen-lg px-2 py-2 md:min-w-[784]">
                    <FirstView />
                </div>
            </div>
        </div>
        </>
    );
};

export default HeaderContent;