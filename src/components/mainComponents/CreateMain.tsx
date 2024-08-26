import { FC } from "react";
import IntroducePages from "./create/IntroducePages";

const CreateMain: FC = () => {
    return (
        <div className="w-full mx-auto flex flex-col justify-center font-kosugiMaru max-w-lg">
            <h2 className="text-3xl text-center">このサイト</h2>
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-2xl">概要</h3>
                <p className="text-lg">
                    ポートフォリオサイトです。
                </p>
            </div>
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-2xl">使用技術</h3>
                <div className="text-lg">
                    <ul className="list-disc list-inside">
                        <li>Vite、React、TypeScript</li>
                        <li>Tailwind CSS、daisyUI</li>
                        <li>TanStack Router</li>
                        <li>body-scroll-lock</li>
                        <li>React Icons</li>
                    </ul>
                </div>
                <p className="text-lg">
                    TanStack Routerはファイルベースのルーティングで実装しました。
                    コードをほぼ記述しなくてよかったので、とても楽でした。
                </p>
                <p className="text-lg">
                    React Iconsは1押しです。
                    種類が豊富なのでいたる所で使いました。
                </p>
            </div>
            <IntroducePages />
            <div className="p-5 flex flex-col gap-4">
                <h3 className="text-2xl">詰まった点</h3>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl">GitHub PagesがSPAに対応してない</h4>
                    <p className="text-lg">
                        サイトを開くと404エラーが出ていました。
                        <a href="https://github.com/rafgraph/spa-github-pages" className="underline">
                            こちら
                        </a>
                        を参考にして解決しました。
                    </p>
                    <p className="text-lg">
                        認証機能などを実装する予定はないので、リダイレクトのみするようにしています。
                    </p>
                    <p className="text-lg">
                        リダイレクトしてる関係か404ページがちらつくので気になったらVercelとかのSPA対応してるのにしたほうがはやそう。
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl">横方向に要素があふれる</h4>
                    <p className="text-lg">
                        2回ぐらいこれで悩みました。
                        1回目はルート以外にw-screenを指定していたのが原因でした。
                        2回目はわかりませんでした。ルートもw-fullにしたら直りました。
                    </p>
                    <p className="text-lg">
                        おそらくw-screenだと思います。
                        どうやらwindows環境では100vwはスクロールバーを含めるらしいです。
                        おとなしくw-fullしか使わないようにします。
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CreateMain;