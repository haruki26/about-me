import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

const HeaderFrame = ({ children, className = "" }: Props) => {
    return (
        <div className={`w-full min-h-96 px-5 flex flex-col gap-10 items-center justify-center ${className}`}>
            {children}
        </div>
    );
}

export default HeaderFrame;