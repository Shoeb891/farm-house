<<<<<<< HEAD
import Navbar from "./Navbar"
import Contact from "/home/shoebm891/farm/farm-house/src/pages/Contact.js"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
=======
import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
>>>>>>> e8202c1d98984a1a6d2fb45d5071bc36c10f0ce8

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
<<<<<<< HEAD
  )

=======
  );
>>>>>>> e8202c1d98984a1a6d2fb45d5071bc36c10f0ce8
}

export default App;
