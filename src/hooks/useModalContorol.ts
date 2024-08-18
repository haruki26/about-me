import { useCallback, useRef, useState } from "react";
import useBodyScrollLock from "./useBodyScrollLock";

const useModalControl = () => {
    const [isVisivleModal, setIsVisibleModal] = useState<boolean>(false);
    const [clickImage, setClickImage] = useState<number>(0);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = useCallback((index: number) => {
        setClickImage(index);
        setIsVisibleModal(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsVisibleModal(false);
    }, []);

    useBodyScrollLock({
        isActive: isVisivleModal,
        target: modalRef
    });

    return {isVisivleModal, clickImage, modalRef, openModal, closeModal};
}

export default useModalControl;