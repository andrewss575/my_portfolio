
import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {

  return (
    // taking styling from styles in App.module.css
    //Navbar is being taken from Navbar.jsx
    <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
);
}

export default App;
