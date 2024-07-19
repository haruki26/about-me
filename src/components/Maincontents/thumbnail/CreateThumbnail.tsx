import appview from "../../assets/images/appview.png";

const CreateThumbnail = () => {
    return (
        <>
        <div className="card glass max-w-sm animate-fade-in-bottom">
            <div className="card-body w-full">
                <h2 className="card-title mb-2 text-2xl">Create</h2>
                <div className="font-kosugiMaru flex flex-col items-center justify-center gap-2 mx-1">
                    <div className="w-full text-left mx-1">
                        <p>Pythonを使った精算アプリやこれから作ってみたいもの</p>
                    </div>
                    <img src={appview} alt="appview" className="object-cover rounded-md w-auto" />
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost text-2xl">More</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default CreateThumbnail;