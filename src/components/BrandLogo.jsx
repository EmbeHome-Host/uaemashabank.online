import '../css/BrandLogo.css';

const BrandLogo = ({ variant = 'light' }) => {
  return (
    <div className={`brand-logo brand-logo--${variant}`}>
      <svg className="brand-logo__icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="var(--color-gold)" />
        <circle cx="24" cy="24" r="10" fill="var(--color-green-dark)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="22"
            y="2"
            width="4"
            height="10"
            rx="2"
            fill="var(--color-gold)"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
      </svg>
      <div className="brand-logo__text">
        <span className="brand-logo__arabic">مشرق</span>
        <span className="brand-logo__english">mashreq</span>
      </div>
    </div>
  );
};

export default BrandLogo;
