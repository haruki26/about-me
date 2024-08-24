import { Children, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const PageFrame = ({ children }: Props) => {

    const [header, main] = Children.toArray(children);
    
    return (
        <div className="w-full">
            <div className="flex flex-col gap-5">
                <header>
                    <div className="w-full">
                        {header}
                    </div>
                </header>
                <main>
                    <div className="w-full">
                        {main}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PageFrame;