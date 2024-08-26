import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import DrawerMenu from '../components/DrawerMenu';
import FooterContent from '../components/FooterContent';
import HeaderNavbar from '../components/headerComponents/HeaderNavbar';
import { Contents } from '../types/Contents';
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const Root = () => {
    const [isDrawerState, setIsDrawerState] = useState<boolean>(false)
    const [isContent, setIsContent] = useState<Contents>("Home")
    const location = useLocation()

    const rewritePath = (path: string) => {
        if(path === "/") {
            window.history.replaceState(null, "", "/")
        } else if(path === "/favorite") {
            return "Favorite"
        } else if(path === "/profiel") {
            return "Profiel"
        } else if(path === "/contact") {
            return "Contact"
        } else if(path === "/create") {
            return "Create"
        }
    }

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

        setIsDrawerState(false)
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })

    }, [location])

    return (
        <div className="w-full">
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
                        <Outlet />
                        <footer>
                            <div className="w-full">
                                <FooterContent />
                            </div>
                        </footer>
                    </div>
                </div>
                <DrawerMenu />
            </div>
            {/* <TanStackRouterDevtools /> */}
        </div>
    );
};

export const Route = createRootRoute({
    component: () => <Root />,
})
