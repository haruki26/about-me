const FavoriteThumbnail = () => {
    return (
        <>
        <div className="card glass">
            <div className="card-body w-full">
                <h2 className="card-title mb-2 text-2xl">Favorite</h2>
                <div className="font-kosugiMaru flex flex-col items-center justify-center gap-2 mx-auto">
                    <div className="w-full text-left mx-1">
                        <p>お菓子作り、きれいな景色を見たり写真を撮ることが好きです</p>
                    </div>
                    <div className="w-full flex gap-7">
                        <div className="flex flex-col gap-2">
                            <img src="./../../public/images/tart.jpg" alt="tart" className="object-cover rounded-md w-36 h-24" />
                            <span className="text-center">いちごタルト</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="./../../../public/images/kaigan.jpg" alt="sea" className="object-cover rounded-md w-36 h-24" />
                            <span className="text-center">地元の海岸</span>
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

export default FavoriteThumbnail;