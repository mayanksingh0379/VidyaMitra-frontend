import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import './styles/global.css';
import Footer from './components/Footer';

// No forced theme — use global CSS as provided in `src/styles/global.css`


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // custom cursor removed

  console.log("App component rendered ✅");
  return (
    <div>
      <nav className={"nav" + (menuOpen ? ' nav--open' : '')}>
        <div className="nav__wrap">
          <div className="brand">
            <div className="brand__logo"></div>
            <span>VidyaMitra</span>
          </div>
          <button
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="nav__burger" />
          </button>

          <div className="nav__links">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
            >
              About
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
            >
              Resources
            </NavLink>
            <NavLink 
              to="/careers" 
              className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
            >
              Careers
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
  </main>

  <Footer />
    </div>
  );
}
