<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Home from "./Pages/Home/Home";
>>>>>>> 460b75595bd50824dd5eb1660539f330ba7d42f7

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
