import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";

const App = () => {

  return (
    <>
    <div className="flex flex-col">
      <header>
          <div className="">
            <HeaderContent />
          </div>
      </header>
      <main>
        <div className="py-5">
          <MainContent />
        </div>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
    </>
  );
};

export default App;