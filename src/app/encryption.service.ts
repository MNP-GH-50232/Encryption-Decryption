import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private key: string = 'M9a8n7a6p5p4u3r2a1m0F1i2n4a5c6e7'; // 32 characters
  private iv: string = 'M1A2F3I4L5123456'; // 16 characters

  constructor() { }

  encrypt(plainText: string): string {
    const encrypted = CryptoJS.AES.encrypt(plainText, CryptoJS.enc.Utf8.parse(this.key), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decrypt(cipherText: string): string {
    const decrypted = CryptoJS.AES.decrypt(cipherText, CryptoJS.enc.Utf8.parse(this.key), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
