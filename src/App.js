import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TotalCalorie from "./Pages/TotalCalorie/TotalCalorie";
import About from "./Pages/Home/About";
import UpdateCalorie from "./Pages/UpdateCalorie/UpdateCalorie";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/totalCalorie" element={<TotalCalorie />} />
        <Route path="/about" element={<About />} />
        <Route path="/updateCalorie/:_id" element={<UpdateCalorie />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
