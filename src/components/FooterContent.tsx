import ContentsMenu from "./footerComponents/ContentsMenu";
import ThemeChangeBtn from "./footerComponents/ThemeChangeBtn";

const FooterContent = () => {
    return (
        <div className="w-screen bg-slate-800 px-3 py-2">
            <div className="flex">
                <div className="px-5">
                    <ContentsMenu />
                </div>
                <div className="flex flex-col">
                    <ThemeChangeBtn />
                </div>
            </div>
            <div className="w-full text-center py-1">
                <small>&copy; 2024 Haruki</small>
            </div>
        </div>
    );
}

export default FooterContent;