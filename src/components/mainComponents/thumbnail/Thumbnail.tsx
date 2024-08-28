import { Link, RegisteredRouter, RoutePaths } from "@tanstack/react-router"
import { FC } from "react"

type Props = {
    children: React.ReactNode;
    title: string;
    path: RoutePaths<RegisteredRouter["routeTree"]>;
    className?: string;
}

const Thumbnail: FC<Props> = ({
    children,
    title,
    path,
    className=""
}) => {
    return (
        <div className="card glass max-w-sm h-80 animate-fade-in-bottom">
            <div className="card-body w-full">
                <h2 className="card-title h-1/6 mb-2 text-3xl">{title}</h2>
                <div className={`flex flex-col h-5/6 items-center justify-center gap-2 px-2 ${className}`}>
                    {children}
                </div>
                <div className="card-actions h-1/6 flex justify-end">
                    <Link to={path}>
                        <button className="btn btn-ghost text-2xl">More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;