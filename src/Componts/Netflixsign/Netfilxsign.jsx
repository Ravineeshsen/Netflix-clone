import React, { useEffect, useState } from 'react';
import './Netfilxsign.css';

const Netfilxsign = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
    const CLIENT_ID = '746930267944-8k7et1lm3lnm8nacl4fjpren9qg7r8e9.apps.googleusercontent.com';
    const REDIRECT_URI = 'http://localhost:3000/inbox'; // Redirect URI configured in Google Developers Console
    const SCOPE = 'https://mail.google.com/';
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

    window.location.href = AUTH_URL;
  };

  const getAccessToken = () => {
    const url = window.location.href;
    const token = url.match(/access_token=([^&]+)/);
    if (token && token[1]) {
      localStorage.setItem("Token", token[1]);
      setAccessToken(token[1]);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <>
      <header className="showcase">
        <div className="logo">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix Logo" />
        </div>

        <div className="showcase-content">
          <div className="formm">
            <form>
              <h1 className='text-white'>Sign In</h1>
              <div className="info">
                <input className="email" type="email" placeholder="Email or phone number" /> <br />
                <input className="email" type="password" placeholder="Password" />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">Sign In</button>
              </div>
              <div className="help">
                <div>
                  <input value="true" type="checkbox" /><label className='text-white'>Remember me</label>
                </div>
                <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help?</a>
              </div>
            </form>
          </div>

          <div className="fcbk">
            <a href="https://facebook.com">
              <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
            </a>
            <p className='text-white'>Login with Facebook</p>
          </div>
          <div className="signup text-white">
            <p>New to Netflix?</p>
            <a href="https://www.netflix.com/dz-en/" onClick={handleLogin}>Sign up now</a>
          </div>
          <div className="more text-white">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Netfilxsign;
