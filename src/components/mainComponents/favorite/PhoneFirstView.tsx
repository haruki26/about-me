import { FC } from "react";

type title = string;

type Props = {
    titles: title[];
    handleContent: (index: number) => void;
}

const PhoneFirstView: FC<Props> = ({titles, handleContent}) => {
    return (
        <div className="m-auto flex flex-col gap-5 animate-fade-in-fwd">
            {titles.map((title, index) => (
                <label
                key={index}
                className="underline text-3xl font-bold font-zenKurenaido text-center"
                onClick={() => handleContent(index)}>
                {title}
            </label>
            ))}
        </div>
    );
};

export default PhoneFirstView;