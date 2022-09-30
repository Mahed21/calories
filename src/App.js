import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import TotalCalorie from './Pages/TotalCalorie/TotalCalorie';
import About from './Pages/Home/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/totalCalorie" element={<TotalCalorie />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
