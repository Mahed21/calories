import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import TotalCalorie from "./Pages/TotalCalorie/TotalCalorie";
import About from "./Pages/Home/About";
import AuthProvider from "./Context/AuthProvider";
import UpdateCalorie from "./Pages/UpdateCalorie/UpdateCalorie";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/totalCalorie" element={<TotalCalorie />} />
          <Route path="/about" element={<About />} />
          <Route path="/updateCalorie/:_id" element={<UpdateCalorie />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
