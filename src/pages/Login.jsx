import React, { Component, useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

class LoginErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Log error if needed
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-od-bg text-od-error">
          <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-od-ivory/90 border border-od-gold">
            <h2 className="text-2xl font-bold mb-4 text-od-gold">Something went wrong</h2>
            <div className="text-red-600 mb-4">{this.state.error?.toString()}</div>
            <button className="bg-od-gold text-black font-bold py-2 px-4 rounded" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Login() {
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);

  const handleGoogleSignIn = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setToast('login');
      setTimeout(() => {
        setToast(null);
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      setError(err.message);
      console.error('Google Sign-In Error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-od-bg text-od-ivory">
      {toast && (
        <div className="fixed top-6 right-6 z-[100] bg-od-gold text-black font-bold px-6 py-3 rounded shadow-lg animate-fade-in">
          Login successful!
        </div>
      )}
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-od-ivory/90 backdrop-blur-lg border border-od-gold">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl font-serif font-bold text-od-gold tracking-widest mb-2">ODAVE</span>
          <h2 className="text-3xl font-bold text-od-gold mb-2 tracking-wide">Sign In</h2>
          <p className="text-sm text-od-bg/80">Luxury Jewellery Rental</p>
        </div>
        {error && <div className="mb-4 text-red-500 text-center font-medium">{error}</div>}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-od-gold hover:text-black transition text-lg shadow-md flex items-center justify-center border border-od-gold"
        >
          {/* Google logo SVG: correct G letter */}
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.18-2H12v4h5.62c-.24 1.36-1.44 4-5.62 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.89 0 3.15.81 3.88 1.5l2.83-2.83C16.13 3.53 14.21 2 12 2z" fill="#4285F4"/>
              <path d="M21.82 10c-.13-.44-.29-.87-.48-1.28-.19-.41-.41-.8-.66-1.17l-2.83 2.83C17.15 10.81 15.89 10 14 10c-3.31 0-6 2.69-6 6s2.69 6 6 6c4.18 0 5.38-2.64 5.62-4H12v-4h9.82z" fill="#34A853"/>
              <path d="M12 2c2.21 0 4.13 1.53 5.71 3.67l-2.83 2.83C15.15 7.19 13.89 6.38 12 6.38c-3.31 0-6 2.69-6 6s2.69 6 6 6c4.18 0 5.38-2.64 5.62-4H12v-4h9.82c.11-.65.18-1.32.18-2C22 6.48 17.52 2 12 2z" fill="#FBBC05"/>
              <path d="M12 2c-2.21 0-4.13 1.53-5.71 3.67l2.83 2.83C8.85 7.19 10.11 6.38 12 6.38c3.31 0 6 2.69 6 6s-2.69 6-6 6c-4.18 0-5.38-2.64-5.62-4H12v-4H2.18c-.11-.65-.18-1.32-.18-2C2 6.48 6.48 2 12 2z" fill="#EA4335"/>
            </g>
          </svg>
          Continue with Google
        </button>
        <div className="mt-8 text-xs text-center text-od-ivory/70">
          By signing in, you agree to our <a href="/terms" className="underline text-od-gold">Terms</a> and <a href="/privacy" className="underline text-od-gold">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}

const WrappedLogin = () => (
  <LoginErrorBoundary>
    <Login />
  </LoginErrorBoundary>
);

export default WrappedLogin;
