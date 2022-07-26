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
