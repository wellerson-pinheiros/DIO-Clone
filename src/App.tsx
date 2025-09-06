import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Cadastro from "./pages/Cadastro.tsx";
import Login from "./pages/Login.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className=" bg-secondary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
