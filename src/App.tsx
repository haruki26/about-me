import FirstView from "./components/firstview";

const App = () => {

  return (
    <div className="py-3 px-2">
      <header>
          <FirstView />
      </header>
      <main className="">
          <div className="">
          </div>
      </main>
      <footer className="bg-amber-300 absolute bottom-0 flex flex-col  space-y-2">
        <div className="flex">
          <button >ページトップへ</button>
          <button >お問い合わせ</button>
        </div>
      </footer>
    </div>
  );
}

export default App;