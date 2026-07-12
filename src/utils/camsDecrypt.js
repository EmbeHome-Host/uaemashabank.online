import CryptoJS from 'crypto-js';

/**
 * Decrypt Camsunit scanner payload when encryption is enabled in API Monitor.
 * Uses AES-256-ECB with PKCS7 padding per Camsunit documentation.
 */
export function decryptCamsData(encryptedData, encryptionKey) {
  if (!encryptedData || !encryptionKey) {
    return encryptedData;
  }

  const key = CryptoJS.enc.Utf8.parse(encryptionKey);
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
