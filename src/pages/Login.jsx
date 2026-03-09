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
          {/* Google G logo: official, multi-color */}
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M21.805 10.023h-9.765v3.977h5.588c-.241 1.285-1.445 3.777-5.588 3.777-3.363 0-6.104-2.777-6.104-6.2 0-3.423 2.741-6.2 6.104-6.2 1.921 0 3.211.818 3.953 1.51l2.7-2.7c-1.697-1.577-3.87-2.55-6.653-2.55-5.522 0-10.001 4.477-10.001 10s4.479 10 10.001 10c5.522 0 9.167-3.872 9.167-9.372 0-.627-.07-1.242-.195-1.828z" fill="#4285F4"/>
              <path d="M3.272 6.545l3.273 2.404c.889-1.2 2.241-2.049 3.955-2.049 1.921 0 3.211.818 3.953 1.51l2.7-2.7c-1.697-1.577-3.87-2.55-6.653-2.55-2.627 0-5.001 1.05-6.653 2.55z" fill="#34A853"/>
              <path d="M21.805 10.023h-9.765v3.977h5.588c-.241 1.285-1.445 3.777-5.588 3.777-2.363 0-4.363-1.777-5.104-4.177l-3.273 2.404c1.652 1.5 4.026 2.55 6.653 2.55 3.363 0 6.104-2.777 6.104-6.2 0-.627-.07-1.242-.195-1.828z" fill="#FBBC05"/>
              <path d="M10.04 4.9c1.921 0 3.211.818 3.953 1.51l2.7-2.7c-1.697-1.577-3.87-2.55-6.653-2.55-2.627 0-5.001 1.05-6.653 2.55l3.273 2.404c.889-1.2 2.241-2.049 3.955-2.049z" fill="#EA4335"/>
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
