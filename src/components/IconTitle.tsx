import { Children, FC } from "react";

type breakPoint = "md" | "lg" | "xl";

type Props = {
    children: React.ReactNode;
    gap: number;
    breakPoint?: breakPoint | null;
    largeGap?: number;
}

const IconTitle: FC<Props> = ({
    children,
    gap,
    breakPoint = null,
    largeGap = gap
}) => {
    const [icon, title] = Children.toArray(children);

    return (
        <div className={`flex gap-${gap} ${breakPoint !== null ? `${breakPoint}:${largeGap}` : ""}`}>
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