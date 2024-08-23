import { ChangeEvent, Children, ReactNode, useRef, useState } from "react";

import HeaderNavbar from "./headerComponents/HeaderNavbar";
import DrawerMenu from "./DrawerMenu";
import FooterContent from "./FooterContent";

import { Contents } from "../types/Contents";

type Props = {
    content: Contents;
    children: ReactNode;
}

const PageFrame = ({content, children}: Props) => {
    const targetRef = useRef(null)
    const [isDrawerState, setIsDrawerState] = useState<boolean>(false)

    const changeDrawerState = (event: ChangeEvent<HTMLInputElement>) => {
        setIsDrawerState(event.target.checked)
    }

    const [header, main] = Children.toArray(children);
    
    return (
        <div className="w-screen overflow-x-hidden">
            <div className="w-full sticky top-0 z-50">
                <HeaderNavbar drawerState={isDrawerState} contentState={content} />
            </div>
            <div className="drawer w-full">
                <input id="drawer-menu" type="checkbox" checked={isDrawerState} className="drawer-toggle" onChange={changeDrawerState} readOnly />
                <div className="drawer-content">
                    <div className="flex flex-col">
                        <header ref={targetRef}>
                            <div className="mx-2">
                                {header}
                            </div>
                        </header>
                        <main>
                            <div className="py-5">
                                {main}
                            </div>
                        </main>
                        <footer>
                            <div className="w-full">
                                <FooterContent />
                            </div>
                        </footer>
                    </div>
                </div>
                <DrawerMenu />
            </div>
        </div>
    );
};

export default PageFrame;