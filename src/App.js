import "./styles/App.css";
import Stampy from "./component/stampy";
import Navbar from "./component/Navbar";
import Ssundee from "./component/Ssundee";
import Sam from "./component/Sam";
import Aphmu from "./component/Aphmu";
import Contact from "./component/Contact";
import About from "./component/About";
import Features from "./component/Features";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>MC GOLDEN ERA</h1>

      <div className="home-description">
        <p>
          Welcome to the Minecraft Golden Era.
          Explore some of the creators and series
          that made Minecraft special.
          <br />
          Made by Mhammad Daaboul and Rawan Daou
        </p>
      </div>

      <div className="creator-section">
        <Link to="/ssundee" className="creator-card">
          <img src="/images/Ssundeepf.jpg" alt="Ssundee" />
          <span>Ssundee</span>
        </Link>

        <Link to="/sam" className="creator-card">
          <img src="/images/sampf.jpg" alt="Sam Gladiator" />
          <span>Sam Gladiator</span>
        </Link>

        <Link to="/aphmau" className="creator-card">
          <img src="/images/aphpf.jpeg" alt="Aphmau" />
          <span>Aphmau</span>
        </Link>

        <Link to="/stampy" className="creator-card">
          <img src="/images/stampypf.jpg" alt="Stampy" />
          <span>Stampy</span>
        </Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ssundee" element={<Ssundee />} />
        <Route path="/sam" element={<Sam />} />
        <Route path="/aphmau" element={<Aphmu />} />
        <Route path="/stampy" element={<Stampy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
