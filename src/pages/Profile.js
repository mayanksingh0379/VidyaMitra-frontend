import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem('gm_user');
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch (e) { setUser(null); }
    }

    function onStorage(e) {
      if (e.key === 'gm_user') {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (!user) return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h2>No user logged in</h2>
      <button onClick={() => navigate('/login')} className="btn btn--primary">Go to Login</button>
    </div>
  );

  return (
    <div style={{ padding: '2rem', maxWidth: 760, margin: '2rem auto' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <img src={user.picture} alt={user.name} style={{ width: 72, height: 72, borderRadius: 999 }} />
        <div>
          <h2 style={{ margin: 0 }}>{user.name}</h2>
          <div style={{ color: '#6b7280' }}>{user.email}</div>
        </div>
      </div>

      <section style={{ marginTop: 18 }}>
        <h3>Account</h3>
        <p>Logged in via Google. You can logout or re-verify your token with the backend.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="btn btn--secondary"
            onClick={() => {
              // logout: clear both stored user info and raw Google token
              localStorage.removeItem('gm_user');
              localStorage.removeItem('googleToken');
              window.dispatchEvent(new Event('gm_logout'));
              navigate('/');
            }}
          >Logout</button>

          <button
            className="btn btn--primary"
            onClick={async () => {
              // attempt to re-verify token with backend
              try {
                const raw = localStorage.getItem('gm_user');
                if (!raw) return alert('No token found');
                const info = JSON.parse(raw);
                const res = await fetch('http://localhost:8080/auth/google', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ token: info.token }),
                });
                if (!res.ok) throw new Error(await res.text());
                alert('Token verified by backend');
              } catch (e) {
                alert('Verification failed: ' + e.message);
              }
            }}
          >Re-verify token</button>
        </div>
      </section>
    </div>
  );
}
