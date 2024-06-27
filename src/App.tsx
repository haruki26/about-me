import HeaderNavbar from "./components/headerComponents/HeaderNavbar";
import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";

const App = () => {
  const visivle = false;

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {visivle ? (
          <div className="bg-slate-200/50 rounded-md px-3 py-2">
            <HeaderContent />
          </div>
        ) : (
          <div className="w-screen flex-grow bg-slate-200/50 sticky top-0">
            <HeaderNavbar />
          </div>
        )}
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