import { FC } from "react"
import ContentsMenu from "./ContentsMenu"

const DrawerMenu: FC = () => {
    return (
        <div className="w-full h-screen drawer-side">
            <label htmlFor="drawer-menu" aria-label="close sideber" className="drawer-overlay" />
            <div className="w-full min-h-full bg-slate-800 flex">
                <div className="m-auto flex flex-col gap-5">
                    <ContentsMenu
                    menuSize="lg"
                    textSize="text-5xl"
                    iconSize="4rem"
                    className="gap-8"
                    transHorizon={false} />
                </div>
            </div>
        </div>
    )
}

export default DrawerMenu