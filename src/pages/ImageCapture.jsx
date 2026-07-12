import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const ImageCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const clearImage = () => {
    setCapturedImage(null);
  };

  return (
    <div className="capture-actions" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '100%', maxWidth: '300px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
      />
      {capturedImage ? (
        <>
          <button className="btn-mashreq-outline" onClick={clearImage} type="button">Clear Image</button>
          <img
            src={capturedImage}
            alt="Captured"
            style={{ maxWidth: '300px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
          />
        </>
      ) : (
        <button className="btn-mashreq" onClick={capture} type="button">Capture Image</button>
      )}
    </div>
  );
};

export default ImageCapture;
