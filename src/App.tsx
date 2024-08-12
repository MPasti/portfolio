import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollUpButton";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
