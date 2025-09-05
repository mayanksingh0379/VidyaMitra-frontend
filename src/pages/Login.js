import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) throw new Error('No credential returned');

      const userInfo = jwtDecode(token);
      console.log('User info:', userInfo);

      // Optionally verify token with backend
      try {
        const res = await fetch('http://localhost:8080/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
        if (!res.ok) {
          console.warn('Backend verification failed', await res.text());
        }
      } catch (e) {
        console.warn('Could not reach backend for token verification', e);
      }

      // Persist user info and token so other tabs can pick it up
      const store = {
        name: userInfo.name,
        email: userInfo.email,
        picture: userInfo.picture,
        sub: userInfo.sub,
        token,
        issuedAt: Date.now(),
      };
      try {
        localStorage.setItem('gm_user', JSON.stringify(store));
        // also store the raw Google credential where other app code expects it
        localStorage.setItem('googleToken', token);
        // notify other parts of the app and other tabs
        window.dispatchEvent(new Event('gm_login'));
        // storage event fires on other tabs automatically
      } catch (e) {
        console.warn('Could not persist user info', e);
      }

      navigate('/profile');
    } catch (err) {
      console.error('Login handling error', err);
    }
  };

  return (
    <div className="login-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }}>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
