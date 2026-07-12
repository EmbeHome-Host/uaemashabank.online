import { useState } from 'react';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import usePasswordToggle from '../hooks/usePasswordToggle';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { BiShieldQuarter } from 'react-icons/bi';
import BrandLogo from './BrandLogo';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import qrScan from '../assets/qrScan.png';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [virtualKeyboard, setVirtualKeyboard] = useState(false);
  const [passwordInputType, Icon, togglePasswordVisibility] = usePasswordToggle(FaRegEye, FaRegEyeSlash);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [car1, car2, car3];

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="login-header-logo">
          <BrandLogo variant="light" />
        </div>
        <a className="login-header-lang" href="#">عربى</a>
      </header>

      <div className="login-body">
        <div className="signin-container">
          <h2>Welcome to Mashreq Online Banking</h2>
          <div className="signin-divider" />

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-field">
              <div className="login-field-header">
                <label htmlFor="username">Username</label>
                <button type="button" className="forgot-link">Forgot Username</button>
              </div>
              <input
                className="input-mashreq"
                type="text"
                id="username"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="login-field">
              <div className="login-field-header">
                <label htmlFor="password">Password</label>
                <button type="button" className="forgot-link">Forgot Password</button>
              </div>
              <div className="password-field-wrapper">
                <input
                  className="input-mashreq"
                  type={passwordInputType}
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {Icon}
                </span>
              </div>
            </div>

            <div className="virtual-keyboard-row">
              <input
                type="checkbox"
                id="virtual-keyboard"
                checked={virtualKeyboard}
                onChange={(e) => setVirtualKeyboard(e.target.checked)}
              />
              <label htmlFor="virtual-keyboard">Virtual Keyboard</label>
            </div>

            <button type="submit" className="login-btn-primary">Sign In</button>

            <hr className="signin-divider-line" />

            <p className="signin-new-user">Are you new to Mashreq Online Banking?</p>
            <button type="button" className="login-btn-outline">Create Credentials</button>

            <div className="security-tips">
              <BiShieldQuarter className="security-tips-icon" />
              <div className="security-tips-text">
                <strong>Ensure you are always protected</strong>
                Check out these security tips to protect yourself from potential online threats.{' '}
                <button type="button" className="forgot-link">Read More</button>
              </div>
            </div>
          </form>
        </div>

        <div className="login-promo">
          <div className="carousel-container">
            <Carousel
              selectedItem={currentImage}
              onChange={setCurrentImage}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`Promo ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Carousel>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
          <div className="qr-section">
            <img src={qrScan} alt="Scan QR code" />
          </div>
        </div>
      </div>

      <footer className="login-footer">
        Mashreqbank PSC and Mashreq Al Islami (The Islamic Window of Mashreqbank PSC, a bank licensed and regulated by the UAE Central Bank)
        <span className="login-footer-links">Requirements | Security | Privacy Policy | Service Terms</span>
      </footer>
    </div>
  );
}

export default LoginPage;
