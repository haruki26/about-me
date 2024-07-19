import React from "react";

type Props = {
    title: JSX.Element;
    content: JSX.Element;
};

const IntroduceContents: React.FC<Props> = ({title, content}: Props): JSX.Element => {
    return (
        <>
        <div className="w-full flex flex-col gap-5 md:gap-0">
            <div className="w-full flex flex-col gap-1 md:flex-row md:py-1 md:relative">
                <div className={`flex gap-1 md:w-1/3`}>
                    <div className="md:m-auto">
                        {title}
                    </div>
                </div>
                <div className="m-3 hidden md:inline-block">
                    <span className="min-h-full border absolute top-0 bottom-0" />
                </div>
                <div className="p-3 h-full">
                    {content}
                </div>
            </div>
        </div>
        </>
    );
};

export default IntroduceContents;