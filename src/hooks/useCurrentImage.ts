import { createRef, RefObject, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

type Props = {
    clickImage: number;
    imageArrLenth: number;
};

const useCurrentImage = ({clickImage, imageArrLenth}: Props) => {
    const [currentImage, setCurrentImage] = useState<number>(clickImage);

    const slideRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<RefObject<HTMLDivElement>[]>([]);
    for (let i = 0; i < imageArrLenth; i++) {
        imageRefs.current[i] = createRef<HTMLDivElement>();
    }

    const scrollImage = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setCurrentImage(index);
            }
        });
    };

    useIntersectionObserver(imageRefs.current, scrollImage,
        {
            root: slideRef.current,
            threshold: 0.5
        }
    )


    useEffect(() => {
        setCurrentImage(clickImage);
    }, [clickImage]);

    useEffect(() => {
        if (currentImage < 0) {
            setCurrentImage(0);
        } else if (currentImage > imageArrLenth - 1) {
            setCurrentImage(imageArrLenth - 1);
        } else {
            imageRefs.current[currentImage].current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
        }
    }, [currentImage]);

    return {currentImage, slideRef, imageRefs, setCurrentImage};
};

export default useCurrentImage;