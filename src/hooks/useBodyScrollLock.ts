import { RefObject, useEffect } from "react";
import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
    enableBodyScroll,
} from "body-scroll-lock";

type Props = {
    isActive: boolean;
    target: RefObject<HTMLElement>;
}

const useBodyScrollLock = ({isActive, target}: Props) => {
    useEffect(() => {
		if (target.current === null) {
            return;
        }

        if (isActive) {
            disableBodyScroll(target.current);
        } else {
            enableBodyScroll(target.current);
        }

        return () => clearAllBodyScrollLocks();
    }, [isActive, target]);
};

export default useBodyScrollLock;