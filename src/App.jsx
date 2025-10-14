import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Technology from "./components/Technology";
import MainContent from "./MainContent";
import Projects from "./Projects";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <MainContent />
       <Footer/>
      </Container>
    </>
  );
}

export default App;
