import { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import '../css/OTPPage.css';
import BrandLogo from './BrandLogo';
import { auth } from '../firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const PhoneAuth = () => {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('.phone-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'IN',
        }
      ],
      signInSuccessUrl: "/dashboard",
      privacyPolicyUrl: '/'
    });
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
