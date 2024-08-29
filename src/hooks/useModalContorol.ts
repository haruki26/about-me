import { useCallback, useRef, useState } from "react";
import useBodyScrollLock from "./useBodyScrollLock";

const useModalControl = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isVisivleModal, setIsVisibleModal] = useState<boolean>(false);
    const [clickImage, setClickImage] = useState<number>(0);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = (images: string[], index: number) => {
        setImages(images);
        setClickImage(index);
        setIsVisibleModal(true);
    }

    const closeModal = useCallback(() => {
        setIsVisibleModal(false);
    }, []);

    useBodyScrollLock({
        isActive: isVisivleModal,
        target: modalRef
    });

    return {isVisivleModal, images, clickImage, modalRef, openModal, closeModal};
}

export default useModalControl;