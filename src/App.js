import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
   <div>
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutme />}></Route>
      </Routes>
   </div>
  );
}

export default App;
