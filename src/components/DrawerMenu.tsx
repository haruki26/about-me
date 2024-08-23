import { FC } from "react"

const DrawerMenu: FC = () => {
    return (
        <div className="w-full drawer-side">
            <label htmlFor="drawer-menu" aria-label="close sideber" className="drawer-overlay" />
            <div className="w-full h-screen bg-slate-800">
                <div className="m-auto flex flex-col gap-5">
                    <span className="text-2xl text-center">Home</span>
                    <span className="text-2xl text-center">Profiel</span>
                    <span className="text-2xl text-center">Favorite</span>
                    <span className="text-2xl text-center">Contact</span>
                </div>
            </div>
        </div>
    )
}

export default DrawerMenu