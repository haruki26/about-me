import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { TargetViewPosition } from "../types/TargetViewPosition";
import FirstView from "./headerComponents/FirstView";
import HeaderNavbar from "./headerComponents/HeaderNavbar";
import useNavAnimation from "../hooks/useNavAnimation";
import { HeaderNavAnimation } from "../types/HeaderNavAnimation";

const HeaderContent = () => {
    const targetRef = useRef(null)
    const [isVisivle, setIsVisible] = useState<boolean>(true);
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
        <div ref={targetRef} className="bg-slate-200/50 rounded-md m-2 px-3 py-2">
            <div className="w-full flex flex-col ">
                <div className="px-2 py-2">
                    <FirstView />
                </div>
            </div>
        </div>
        </>
    );
};

export default HeaderContent;