import { useState, useEffect, useCallback } from 'react';
import '../css/FingerprintCapture.css';
import { CAMS_API_KEY, CAMS_ENCRYPTION_KEY } from '../config/cams';
import { decryptCamsData } from '../utils/camsDecrypt';

function prepareCaptureData(data) {
  if (!data) return data;

  let payload = data;
  if (CAMS_ENCRYPTION_KEY) {
    const encrypted =
      typeof data === 'string' ? data : data?.encryptedData || data?.data || data?.response;
    if (encrypted) {
      payload = decryptCamsData(encrypted, CAMS_ENCRYPTION_KEY);
    }
  }

  if (typeof window.getScannerSuccessData === 'function') {
    return window.getScannerSuccessData(payload);
  }

  if (typeof payload === 'string') {
    try {
      return JSON.parse(payload);
    } catch {
      return payload;
    }
  }

  return payload;
}

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });

const FingerprintCapture = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const [status, setStatus] = useState('Connect a CAMS fingerprint scanner and click Capture.');
  const [fingerprintImage, setFingerprintImage] = useState(null);
  const [capturing, setCapturing] = useState(false);

  const handleCaptureSuccess = useCallback((data) => {
    setCapturing(false);
    try {
      const scannerData = prepareCaptureData(data);

      if (scannerData?.image) {
        setFingerprintImage(`data:image/png;base64,${scannerData.image}`);
      }
      setStatus('Fingerprint captured successfully.');
    } catch {
      setStatus('Fingerprint captured.');
    }
  }, []);

  const handleCaptureFailure = useCallback((data) => {
    setCapturing(false);
    const failureData =
      typeof window.getScannerFailureData === 'function'
        ? window.getScannerFailureData(data)
        : data;
    const message = failureData?.errorString || 'Fingerprint capture failed. Check scanner connection.';
    setStatus(message);
  }, []);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        await loadScript('https://js.camsunit.com/jquery-1.11.3.min.js');
        await loadScript('https://js.camsunit.com/camsScanner.js');
        if (mounted) setSdkReady(true);
      } catch {
        if (mounted) setStatus('Unable to load Camsunit scanner SDK.');
      }
    };

    init();

    window.onCaptureSuccess = handleCaptureSuccess;
    window.onCaptureFailure = handleCaptureFailure;

    return () => {
      mounted = false;
      delete window.onCaptureSuccess;
      delete window.onCaptureFailure;
    };
  }, [handleCaptureSuccess, handleCaptureFailure]);

  const handleCapture = () => {
    if (!CAMS_API_KEY) {
      setStatus('Camsunit API key missing. Add VITE_CAMS_API_KEY to .env.local');
      return;
    }
    if (!sdkReady || typeof window.capture !== 'function') {
      setStatus('Scanner SDK is still loading. Please wait.');
      return;
    }

    setCapturing(true);
    setStatus('Place your finger on the scanner…');
    setFingerprintImage(null);
    window.capture(CAMS_API_KEY, true);
  };

  const handleClear = () => {
    setFingerprintImage(null);
    setStatus('Connect a CAMS fingerprint scanner and click Capture.');
  };

  return (
    <div className="fingerprint-capture">
      <p className="fingerprint-status">{status}</p>
      <div className="fingerprint-actions">
        <button
          type="button"
          className="btn-mashreq"
          onClick={handleCapture}
          disabled={capturing}
        >
          {capturing ? 'Capturing…' : 'Capture Fingerprint'}
        </button>
        {fingerprintImage && (
          <button type="button" className="btn-mashreq-outline" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
      {fingerprintImage && (
        <img src={fingerprintImage} alt="Captured fingerprint" className="fingerprint-preview" />
      )}
    </div>
  );
};

export default FingerprintCapture;
