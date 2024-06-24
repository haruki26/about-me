import { FaGithub } from "react-icons/fa";

const FirstView = () => {
    return (
        <div className="bg-slate-200/70 flex flex-col px-3 py-1">
            <div className="flex justify-between">
                <div className="">
                    <h1 className=" text-black text-left">First View</h1>
                </div>
                <div className="">
                    <a href="https://github.com/haruki26">
                        <FaGithub size={"1.5rem"} color="black"/>
                    </a>
                </div>
            </div>
        
        </div>
    );
}

export default FirstView;