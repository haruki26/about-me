import { useLocation, Outlet } from "@tanstack/react-router";
import { useState, useEffect, createContext } from "react";
import { Contents } from "../types/Contents";
import DrawerMenu from "./DrawerMenu";
import FooterContent from "./FooterContent";
import HeaderNavbar from "./headerComponents/HeaderNavbar";
import Modal from "./mainComponents/favorite/Modal";
import useModalControl from "../hooks/useModalContorol";

export const ModalContext = createContext(
    {} as {
        openModal: (images: string[], index: number) => void;
    }
);

const Root = () => {
    const [isDrawerState, setIsDrawerState] = useState<boolean>(false)
    const [isContent, setIsContent] = useState<Contents>("Home")
    const location = useLocation()

    const {isVisivleModal, images, clickImage, modalRef, openModal, closeModal} = useModalControl();

    useEffect(() => {
        if(location.pathname === "/") {
            setIsContent("Home")
        } else if(location.pathname === "/favorite") {
            setIsContent("Favorite")
        } else if(location.pathname === "/profiel") {
            setIsContent("Profiel")
        } else if(location.pathname === "/contact") {
            setIsContent("Contact")
        } else if(location.pathname === "/create") {
            setIsContent("Create")
        }

        window.history.replaceState(null, "", location.pathname)
        setIsDrawerState(false)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [location])

    return (
        <div className="w-full relative">
            <div className={`w-full ${isContent === "Home"? "fixed": "sticky"} top-0 left-0 z-10`}>
                <HeaderNavbar drawerState={isDrawerState} contentState={isContent} />
            </div>
            <div className="drawer w-full">
                <input
                id="drawer-menu"
                type="checkbox"
                checked={isDrawerState}
                className="drawer-toggle"
                onChange={(e) => setIsDrawerState(e.target.checked)} readOnly />
                <div className="drawer-content">
                    <div className="flex flex-col gap-5">
                        <ModalContext.Provider value={{openModal}}>
                            <Outlet />
                        </ModalContext.Provider>
                        <footer>
                            <div className="w-full">
                                <FooterContent />
                            </div>
                        </footer>
                    </div>
                </div>
                <DrawerMenu />
                {isVisivleModal && (
                    <div ref={modalRef}>
                        <Modal images={images} clickImage={clickImage} closeModalAct={closeModal} />
                    </div>
                )}
            </div>
            {/* <TanStackRouterDevtools /> */}
        </div>
    );
};

export default Root;