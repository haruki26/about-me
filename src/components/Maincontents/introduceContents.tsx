import React from "react";
import { TableContents } from "../../types/TableContents";

type Props = {
    contents: TableContents;
    divTitleFraction: string;
};

const IntroduceContents: React.FC<Props> = ({contents, divTitleFraction}: Props): JSX.Element => {


    return (
        <>
        <div className="w-full flex flex-col gap-5 md:gap-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:h-full md:relative md:py-1">
                <div className={`flex text-2xl md:w-${divTitleFraction}`}>
                    <div className="flex gap-2 md:w-2/3">
                        {contents.title}
                    </div>
                    <div className="mx-auto">
                        <span className="hidden min-h-full md:inline-block md:border absolute top-0 bottom-0" />
                    </div>
                </div>
                <div className="p-3 flex gap-2 text-2xl">
                    {contents.content}
                </div>
            </div>
        </div>
        </>
    );
};

export default IntroduceContents;