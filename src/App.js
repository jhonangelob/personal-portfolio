import "./App.scss";
import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Projects,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
