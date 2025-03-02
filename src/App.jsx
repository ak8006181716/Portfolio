import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Technology from "./components/Technology";
import MainContent from "./MainContent";
import Projects from "./Projects";

function App() {
  return (
    <>
      <div className=" text-white h-screen flex flex-col">
        <Header />
        <MainContent />
        <About />
        <Technology />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
