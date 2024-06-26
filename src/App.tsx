import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";

const App = () => {

  return (
    <div className="py-3 px-2">
      <header>
        <div className="bg-slate-200/50 rounded-md px-3 py-2">
          <HeaderContent />
        </div>
      </header>
      <main>
        <div className="py-5">
          <MainContent />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;