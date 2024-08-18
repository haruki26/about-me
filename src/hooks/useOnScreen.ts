import { useEffect, useState } from "react";
import { TargetViewPosition } from "../types/TargetViewPosition";

const useOnScreen = (targetRef: React.RefObject<HTMLElement>): TargetViewPosition => {
    const [targetViewPosition, setTargetViewpositon] = useState<TargetViewPosition>(undefined);

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTargetViewpositon("VISIBLE");
                return;
            }
            if (entry.boundingClientRect.top > 0) {
                setTargetViewpositon("BELWO_VIEWPORT");
            } else {
                setTargetViewpositon("ABOVE_VIEWPORT");
            }
        },
        {
            root: null,
            threshold: 0,
        }
    );

    useEffect(() => {
        if (targetRef.current) observer.observe(targetRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return targetViewPosition;
}

export default useOnScreen;