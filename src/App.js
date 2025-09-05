import { Routes, Route, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import './styles/global.css';
import Footer from './components/Footer';

// No forced theme — use global CSS as provided in `src/styles/global.css`


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const avatarRef = useRef(null);

  useEffect(() => {
    const raw = localStorage.getItem('gm_user');
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch (e) { /* ignored */ }
    }

    const onLogin = () => {
      const v = localStorage.getItem('gm_user');
      if (v) setUser(JSON.parse(v));
    };
    const onLogout = () => setUser(null);

    window.addEventListener('gm_login', onLogin);
    window.addEventListener('gm_logout', onLogout);
    return () => {
      window.removeEventListener('gm_login', onLogin);
      window.removeEventListener('gm_logout', onLogout);
    };
  }, []);

  // close avatar menu when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // close mobile nav when the route changes
  useEffect(() => {
    // when location changes, ensure the mobile menu is closed
    setMenuOpen(false);
  }, [location.pathname]);
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
            {!user ? (
              <NavLink 
                to="/login" 
                className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
              >
                Login
              </NavLink>
            ) : null}

            {/* avatar circle when logged in */}
            {user && (
              <div className="nav__avatar-wrap" ref={avatarRef}>
                <button
                  title={user.name || 'Account'}
                  className="nav__avatar"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAvatarOpen((v) => !v);
                  }}
                >
                  <img src={user.picture} alt={user.name || 'avatar'} />
                </button>

                {avatarOpen && (
                  <div className="nav__avatar-menu" role="menu">
                    <button
                      className="nav__avatar-menu-item"
                      onClick={() => {
                        setAvatarOpen(false);
                        navigate('/profile');
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="nav__avatar-menu-item"
                      onClick={() => {
                        setAvatarOpen(false);
                        navigate('/');
                      }}
                    >
                      Settings
                    </button>
                    <div className="nav__avatar-menu-divider" />
                    <button
                      className="nav__avatar-menu-item"
                      onClick={() => {
                        localStorage.removeItem('gm_user');
                        setUser(null);
                        window.dispatchEvent(new Event('gm_logout'));
                        setAvatarOpen(false);
                        navigate('/');
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
  </main>

  <Footer />
    </div>
  );
}
