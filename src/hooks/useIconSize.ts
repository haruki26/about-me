import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

type breakPoint = "md" | "lg" | "xl";

type Props = {
    iconSize: number;
    breakPoint?: breakPoint | null;
    largeIconSize?: number;
}

const useIconSize = ({
    iconSize,
    breakPoint = null,
    largeIconSize = iconSize
}: Props): string => {
    const [isIconSize, setIsIconSize] = useState<number>(iconSize);

    const [width] = useWindowSize();

    const createSize = (breakWidth: number) => {
        if (width >= breakWidth) {
            setIsIconSize(largeIconSize);
        } else {
            setIsIconSize(iconSize);
        }
    }

    const handleOptions = (breakPoint: breakPoint) => {
        switch (breakPoint) {
            case "md":
                createSize(768);
                break;
            case "lg":
                createSize(1024);
                break;
            case "xl":
                createSize(1280);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (breakPoint === null) return
        handleOptions(breakPoint);
    }, [width]);

    return `${isIconSize}rem`;
};

export default useIconSize;