import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
