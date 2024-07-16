import React from "react";
import { TableContents } from "../../types/TableContents";

type Props = {
    contents: TableContents;
    divTitleFraction: string;
};

const IntroduceContents: React.FC<Props> = ({contents, divTitleFraction}: Props): JSX.Element => {
    console.log(divTitleFraction)

    return (
        <>
        <div className="w-full flex flex-col gap-5 md:gap-0">
            <div className="w-full flex flex-col gap-1 md:flex-row md:h-full md:relative md:py-1">
                <div className={`flex gap-1 md:justify-between md:w-${divTitleFraction}`}>
                    <div className="flex gap-2 my-auto">
                        {contents.title}
                    </div>
                    <div className="m-3 hidden md:inline-block">
                        <span className="min-h-full border absolute top-0 bottom-0" />
                    </div>
                </div>
                <div className="p-3 flex flex-col gap-2 md:flex-row">
                    {contents.content}
                </div>
            </div>
        </div>
        </>
    );
};

export default IntroduceContents;