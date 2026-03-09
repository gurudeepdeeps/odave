// Error boundary component
import React, { Component, useState, useRef, useEffect } from 'react';

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
// ...existing code...
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'normal',
        callback: () => {},
      }, auth);
      window.recaptchaVerifier.render();
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert('OTP sent!');
    } catch (err) {
      setError(err.message);
      console.error('OTP Send Error:', err);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await confirmationResult.confirm(otp);
      alert('Phone login successful!');
    } catch (err) {
      setError(err.message);
      console.error('OTP Verify Error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-od-bg text-od-ivory">
      <div id="recaptcha-container" className="mb-4 flex justify-center"></div>
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-od-ivory/90 backdrop-blur-lg border border-od-gold">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl font-serif font-bold text-od-gold tracking-widest mb-2">ODAVE</span>
          <h2 className="text-3xl font-bold text-od-gold mb-2 tracking-wide">Sign In</h2>
          <p className="text-sm text-od-bg/80">Luxury Jewellery Rental</p>
        </div>
        <form onSubmit={confirmationResult ? handleVerifyOtp : handleSendOtp}>
          {error && <div className="mb-4 text-red-500 text-center font-medium">{error}</div>}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-od-gold">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-od-gold rounded-lg bg-od-bg text-od-ivory focus:outline-none focus:ring-2 focus:ring-od-gold"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              required
            />
          </div>
          {confirmationResult && (
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-od-gold">OTP</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-od-gold rounded-lg bg-od-bg text-od-ivory focus:outline-none focus:ring-2 focus:ring-od-gold"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter OTP"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-od-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition text-lg shadow-md"
          >
            {confirmationResult ? 'Verify OTP' : 'Send OTP'}
          </button>
        </form>
        <div className="mt-8 text-xs text-center text-od-ivory/70">
          By signing in, you agree to our <a href="/terms" className="underline text-od-gold">Terms</a> and <a href="/privacy" className="underline text-od-gold">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

// Wrap Login in error boundary
const WrappedLogin = () => (
  <LoginErrorBoundary>
    <Login />
  </LoginErrorBoundary>
);

export default WrappedLogin;
