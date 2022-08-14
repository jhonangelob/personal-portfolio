import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  Loader,
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Projects,
  Particles,
} from "./components";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Particles />
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
