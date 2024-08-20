import { Children, FC } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const SkillSets: FC<Props> = ({
    children,
    className = ""
}) => {
    const [label, ...skills] = Children.toArray(children);

    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label}
            <div className="mx-auto flex flex-col gap-2 text-center">
                {skills}
            </div>
        </div>
    );
}

export default SkillSets;