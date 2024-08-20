import { Children, FC } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const ImageContents: FC<Props> = ({
    children,
    className = ""
}) => {
    const [img, ...texts] = Children.toArray(children);

    return (
        <div className={`flex flex-col gap-3 w-full ${className}`}>
            {img}
            <div className="w-full flex flex-col text-center">
                {texts}
            </div>
        </div>
    )
}

export default ImageContents;