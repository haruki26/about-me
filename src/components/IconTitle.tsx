import { Children, FC } from "react";

type breakPoint = "md" | "lg" | "xl";

type Props = {
    children: React.ReactNode;
    gap?: number;
    className?: string;
    breakPoint?: breakPoint | null;
    largeGap?: number;
}

const IconTitle: FC<Props> = ({
    children,
    gap = 2,
    className = "",
    breakPoint = null,
    largeGap = gap
}) => {
    const [icon, title] = Children.toArray(children);

    return (
        <div className={`flex ${className} gap-${gap} ${breakPoint !== null ? `${breakPoint}:${largeGap}` : ""}`}>
            <div className="my-auto">
                {icon}
            </div>
            <div className="flex items-center">
                {title}
            </div>
        </div>
    )
}

export default IconTitle;