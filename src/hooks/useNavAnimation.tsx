import { HeaderNavAnimation } from "../types/HeaderNavAnimation";

const useNavAnimation = (isVisivle: boolean): HeaderNavAnimation => {
    return isVisivle ? "animate-text-focus-in" : "animate-text-blur-out";
}

export default useNavAnimation