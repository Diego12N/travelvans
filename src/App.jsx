import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <header>
      <Link to="/">TRAVEL'VANS</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
