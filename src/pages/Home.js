import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../Chatbot';

function Home() {
  const chatbotRef = useRef(null);

  return (
    <div>
      <header className="home-hero">
        <h1 className="home-greeting">Meet VidyaMitra</h1>
        <p className="home-subtitle">
          <p>Quick, friendly AI guidance for students planning their next step after Class 10 or 12.</p>
          <p>Get personalised suggestions on careers, subject choices, and practical next steps — no jargon, just clear advice you can act on.</p>
        </p>
      </header>

      <div ref={chatbotRef} className="chatbot-container">
        <Chatbot />
      </div>

      <section className="mission-section">
        <div className="mission-card card">
          <h2 className="section__title">How VidyaMitra Solves Career Confusion</h2>

          <div className="mission-steps">
            <button
              type="button"
              className="mission-step"
              onClick={() => { if (chatbotRef.current) chatbotRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
            >
              <div className="mission-icon" aria-hidden>🤖</div>
              <h3 className="mission-step-title">Discover with AI</h3>
              <p className="mission-step-desc">Tell VidyaMitra what you like and get personalised career options instantly.</p>
            </button>

            <Link to="/resources" className="mission-step">
              <div className="mission-icon" aria-hidden>📚</div>
              <h3 className="mission-step-title">Learn with Resources</h3>
              <p className="mission-step-desc">Short guides and subject picks to help you explore the best paths.</p>
            </Link>

            <Link to="/careers" className="mission-step">
              <div className="mission-icon" aria-hidden>🎓</div>
              <h3 className="mission-step-title">Build with Career Paths</h3>
              <p className="mission-step-desc">Clear next steps — subjects, courses and practical actions to reach your goals.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-quote">
        <div className="container">
          <blockquote className="home-quote__text">
            "Your future starts with one brave choice — explore what excites you, learn with curiosity, and build the career you'll love."
          </blockquote>
          <p className="home-quote__author">— VidyaMitra</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
