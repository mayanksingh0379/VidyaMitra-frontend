import React from 'react';

function About() {
  const missionSteps = [
    {
      icon: '🎯',
      title: 'Guide with clarity',
      desc: 'Practical, step-by-step career advice tailored for indian students navigating college & early careers.'
    },
    {
      icon: '🚀',
      title: 'Grow skills fast',
      desc: 'Resources and bite-sized projects to build real-world skills and confidence.'
    },
    {
      icon: '🤝',
      title: 'Build community',
      desc: 'Connect with peers, mentors and opportunities — so progress doesn\'t feel lonely.'
    }
  ];

  const team = [
    {
      name: 'Mayank Singh',
  role: 'Founder',
  bio: 'Leading the vision, strategy, and product direction to build practical guidance for students.',
      socials: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mayank-r-singh/', icon: '🔗' },
        { label: 'Instagram', url: 'https://www.instagram.com/mayanksingh.gg/', icon: '�' }
      ]
    },
    {
      name: 'Pratik Wadekar',
  role: 'Strategic Partner',
  bio: 'Contributing across product, design, and execution to bring ideas to life and support the mission.',
      socials: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pratik-wadekar-84468037b/', icon: '�' }
      ]
    }
  ];

  return (
    <main className="main" style={{ paddingTop: '3.25rem' }}>
      <div className="container">
        <section
          className="section home-hero"
          style={{ paddingTop: '2.5rem', paddingBottom: '1.75rem', textAlign: 'center' }}
        >
          <h1 className="home-greeting section__title" style={{ marginBottom: '0.75rem', padding: '0.6rem 0' }}>
            About
          </h1>
          <p className="section__subtitle" style={{ maxWidth: '68ch', margin: '0 auto' }}>
            Built by <b>Team AttenX </b>for the Google Gen AI Exchange Hackathon, our mission is simple: help students discover paths, build skills, and unlock opportunities.
          </p>
        </section>

        <section className="section" style={{ textAlign: 'left', marginTop: '2.5rem', paddingTop: '0.5rem' }}>
          <h2 className="section__title" style={{ display: 'block', margin: '0 auto 0.6rem', textAlign: 'center' }}>My personal story</h2>
          <div style={{ color: 'var(--ink)', fontWeight: 500, maxWidth: '70ch', margin: '1rem auto', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1rem' }}>
              Hi, I’m Mayank Singh, founder of VidyaMitra. I designed this approachable career guidance platform to help Indian students discover
              meaningful paths, build skills, and explore opportunities.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              When I was in class 10, I had no clue what I wanted to do. I chose Science with Maths, maybe because I
              liked Maths, but deep down, I was always drawn to technology and building new things. In class 11,
              I joined IIT-JEE coaching, but it didn’t click for me. I decided to change direction, learned German,
              and even applied to study in Germany. Though I got accepted, I realized after class 12 that my heart
              was in technology, not overseas studies.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              For a while, I even considered becoming a doctor because my parents hoped I would, but I knew it wasn’t
              my path. Technology was my true calling, building exciting new tech with like minded teammates is what
              I want to dedicate my life to. I didn’t get into the “perfect” college, and I made plenty of mistakes
              along the way, but the most important lesson I’ve learned is that life is not supposed to be linear.
              You mess up sometimes and that’s okay. What matters is to keep going.
            </p>
          </div>
        </section>

        <div className="mission-section">
          <article className="mission-card card" aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="card__title">Our mission</h2>
            <p style={{ color: 'var(--ink-muted)', maxWidth: '70ch', margin: '0 auto' }}>
              We want to make career growth simple, honest and action oriented. Small, consistent wins beat unclear
              long-term plans, so we focus on practical steps, projects, and community.
            </p>

            <div className="mission-steps" style={{ marginTop: '1.5rem' }}>
              {missionSteps.map((s, i) => (
                <button
                  key={i}
                  className="mission-step"
                  aria-label={s.title}
                  style={{ textAlign: 'left' }}
                >
                  <div className="mission-icon" aria-hidden>
                    {s.icon}
                  </div>
                  <div>
                    <div className="mission-step-title">{s.title}</div>
                    <div className="mission-step-desc">{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </article>
        </div>

        <section className="section" style={{ marginTop: '2.5rem' }}>
          <h2 className="section__title">Team</h2>
          <p className="section__subtitle">Two friends focused on product, content and community.</p>

          <div className="mission-steps" style={{ marginTop: '1.25rem' }}>
            {team.map((m, i) => (
              <article key={i} className="mission-step" style={{ cursor: 'default' }}>
                <div className="mission-icon">👤</div>
                <div>
                  <div className="mission-step-title">{m.name} <span style={{ fontWeight: 600, color: 'var(--ink-muted)', fontSize: '0.9rem' }}>· {m.role}</span></div>
                  <div className="mission-step-desc">{m.bio}</div>
                  {m.socials && (
                    <div className="team-socials" aria-hidden>
                      {m.socials.map((s, si) => (
                        <a
                          key={si}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{ fontSize: '0.9rem', padding: '6px 10px', borderRadius: '999px' }}
                          aria-label={`${m.name} on ${s.label}`}
                        >
                          <span aria-hidden style={{ marginRight: 6 }}>{s.icon}</span>
                          <span>{s.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 className="section__title" style={{ fontSize: '1.6rem' }}>Want to collaborate?</h3>
            <p className="section__subtitle">If you have ideas, mentorship offers, or feedback — let's chat.</p>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mayanksingh0379@gmail.com"
                className="btn btn--primary"
                role="button"
                aria-label="Contact us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
        <section className="home-quote" style={{ marginTop: '2.5rem' }}>
          <div className="home-quote__text">
            Life isn’t supposed to be linear — build, fail, learn, and keep moving; your mistakes become the fuel for
            better things.
          </div>
          <div className="home-quote__author">— Mayank Singh</div>
        </section>
      </div>
    </main>
  );
}

export default About;
