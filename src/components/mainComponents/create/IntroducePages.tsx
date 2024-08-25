import { FC } from "react";

const IntroducePages: FC = () => {
    return (
        <div className="p-5 flex flex-col gap-4">
            <h3 className="text-2xl">各ページについて</h3>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Home</h4>
                <p className="text-lg">
                    トップページです。
                    各ページの内容を簡単に紹介するサムネイルのようなものを作りました。
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Profiel</h4>
                <p className="text-lg">
                    自己紹介のページです。
                    表形式に変形するところがあります。
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Favorite</h4>
                <p className="text-lg">
                    好きなものを紹介するページです。
                    一部の画像はクリックするとモーダルが開きます。
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Contact</h4>
                <p className="text-lg">
                    お問い合わせページです。
                    daisyUIのブラウザのモーダルを使ってみたかったので使ってみました。
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Create</h4>
                <p className="text-lg">
                    このページです。
                    作ったものを紹介するページです。
                    まだこのサイトについてしか書いていません。
                </p>
            </div>
        </div>
    );
}

export default IntroducePages;