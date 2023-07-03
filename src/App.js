<<<<<<< HEAD
import Navbar from "./Navbar"
import Contact from "/home/shoebm891/farm/farm-house/src/pages/Contact.js"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

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
  )
=======
import "./App.css";
import MapContainer from "./components/MapContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Farm House</h1>
      <MapContainer />
    </div>
  );
>>>>>>> 6eb8f648219cfcaffd712766ba7ce4208458a47c
}

export default App