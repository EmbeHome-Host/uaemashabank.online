import { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import '../css/OTPPage.css';
import BrandLogo from './BrandLogo';
import { auth } from '../firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

const PhoneAuth = () => {
  useEffect(() => {
    // Set reCAPTCHA app verifier type to 'invisible'
    if (typeof window !== 'undefined') {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (token) => {
          console.log('reCAPTCHA token received');
        }
      });
    }

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('.phone-auth-container', {
      signInOptions: [
        {
          provider: 'phone',
          defaultCountry: 'IN',
        }
      ],
      signInSuccessUrl: "/dashboard",
      privacyPolicyUrl: '/',
      tosUrl: '/'
    });

    return () => {
      // Cleanup on unmount
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  return (
    <div className="otp-page">
      <header className="otp-header">
        <BrandLogo variant="light" />
        <h1>Second Factor Authentication</h1>
      </header>

      <div className="otp-body">
        <div className="otp-card">
          <div className="otp-instructions">
            <p>Login Second Factor Authentication</p>
            <p>Enter the One Time Password sent to your mobile phone</p>
          </div>

          <div className="phone-auth-container" />
          <div id="recaptcha-container"></div>

          <div className="note-box">
            <p>
              <span className="required">*</span> Please note that all communication related to Internet banking will be sent on your registered mobile number.
            </p>
            <p>
              <span className="required">*</span> Mashreq Bank or any of its representatives never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account. Never respond to such communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAuth;
