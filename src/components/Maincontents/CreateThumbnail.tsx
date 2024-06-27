const CreateThumbnail = () => {
    return (
        <>
        <div className="card glass">
            <div className="card-body w-full">
                <h2 className="card-title mb-2 text-2xl">Create</h2>
                <div className="font-kosugiMaru flex flex-col items-center justify-center gap-2 mx-2">
                    <div className="w-full text-left mx-1">
                        <p>Pythonを使った精算アプリなどを作りました</p>
                    </div>
                    <img src="./../../../public/images/appview.png" alt="appview" className="object-cover rounded-md w-auto" />
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