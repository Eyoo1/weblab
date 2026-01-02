import Navbar from "./Navbar";
import Home from "./Home";
import Trainers from "./Trainers";
import Booking from "./Booking";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
