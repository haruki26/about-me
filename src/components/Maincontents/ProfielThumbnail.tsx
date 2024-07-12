import icon from "../../assets/images/icon.jpg"

const ProfieilThumbnail = () => {
    return (
        <>
        <div className="card glass max-w-sm animate-fade-in-bottom">
            <div className="card-body w-full h-full">
                <h2 className="card-title mb-2 text-2xl">Profiel</h2>
                <div className="flex items-center justify-center gap-2">
                    <div className="font-kosugiMaru text-left mx-1">
                        <p>久保陽生といいます</p>
                        <p>専門学生です</p>
                        <p>Python、Web制作などについて学んでます</p>
                    </div>
                    <div className="avatar">
                        <div className="rounded-xl w-30 h-28">
                            <img src={icon} alt="icon" className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost text-2xl">More</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfieilThumbnail;