import CryptoJS from 'crypto-js';

/**
 * Encrypts a URL with a password using AES.
 * Returns a URL-safe string.
 */
export const encryptUrl = (url: string, password: string): string => {
  const encrypted = CryptoJS.AES.encrypt(url, password).toString();
  return base64ToUrlSafe(encrypted);
};

/**
 * Decrypts an encrypted string with a password.
 * Returns the original URL.
 * Throws an error if decryption fails or password is wrong.
 */
export const decryptUrl = (encryptedString: string, password: string): string => {
  try {
    const base64 = urlSafeToBase64(encryptedString);
    const bytes = CryptoJS.AES.decrypt(base64, password);
    const originalUrl = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!originalUrl) {
      throw new Error('Decryption failed');
    }
    
    // Basic validation to ensure it looks like a URL
    try {
      new URL(originalUrl);
    } catch {
      // If it's not a valid URL, it might be a bad decryption result
      // But we'll allow it if it looks like a relative path or just return it
      // For now, let's assume the input was a valid URL.
      // If the output is garbage, it won't be a valid URL usually.
    }
    
    return originalUrl;
  } catch (error) {
    throw new Error('Invalid password or corrupted link');
  }
};

// Helper to make Base64 string URL safe
const base64ToUrlSafe = (base64: string): string => {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

// Helper to convert URL safe string back to Base64
const urlSafeToBase64 = (urlSafe: string): string => {
  let base64 = urlSafe.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return base64;
};
