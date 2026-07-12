import '../css/Password.css';
import { useState } from 'react';
import usePasswordToggle from '../hooks/usePasswordToggle';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import smsImage from '../assets/smsImage.png';
import PropTypes from 'prop-types';

export default function Password(props) {
  const [passwordInputType, Icon, togglePasswordVisibility] = usePasswordToggle(FaRegEye, FaRegEyeSlash);
  const [password, setPassword] = useState('');

  return (
    <div className="password-card">
      <div className="headColor">High Security Transaction Password</div>
      <div className="subColor">Enter high security password received in your Mobile Phone</div>

      <div className="password-input-row">
        <span>Enter High Security Password <span className="required">*</span></span>
        <input
          type={passwordInputType}
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
          {Icon}
        </span>
      </div>

      <div className="password-actions">
        <button className="btn-mashreq" type="button" onClick={props.switchToCard3}>Confirm</button>
        <button className="btn-mashreq-outline" type="button">Reset</button>
      </div>

      <div className="phoneImgSec">
        <img src={smsImage} alt="SMS" width="80" height="80" />
        <div>
          <h6>If you did not receive the High Security Password on SMS, you can</h6>
          <button className="btn-mashreq" type="button">Click here to resend the OTP</button>
        </div>
      </div>
    </div>
  );
}

Password.propTypes = {
  switchToCard3: PropTypes.func.isRequired,
};
