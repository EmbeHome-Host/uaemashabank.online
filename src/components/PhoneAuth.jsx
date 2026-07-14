import {useEffect} from 'react'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import '../css/OTPPage.css'
import BrandLogo from './BrandLogo'
import {compatAuth, firebase} from '../firebase-config'

const PhoneAuth = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(compatAuth)

    ui.start('.phone-auth-container', {
      signInFlow: 'popup',

      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'IN',
        },
      ],

      callbacks: {
        signInSuccessWithAuthResult: () => {
          window.location.href = '/dashboard'
          return false
        },

        uiShown: () => {
          console.log('Firebase phone authentication loaded')
        },
      },

      privacyPolicyUrl: '/',
      tosUrl: '/',
    })

    return () => {
      ui.reset()
    }
  }, [])

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
              <span className="required">*</span> Please note that all
              communication related to Internet banking will be sent to your
              registered mobile number.
            </p>

            <p>
              <span className="required">*</span> Never share your password or
              one-time password with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneAuth