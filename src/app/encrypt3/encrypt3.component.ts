import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-encrypt3',
  templateUrl: './encrypt3.component.html',
  styleUrls: ['./encrypt3.component.css']
})
export class Encrypt3Component implements OnInit {


plainText: string = '';
  cipherText: string = '';

   constructor(private encryptionService: EncryptionService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  encrypt() {
    this.cipherText = this.encryptionService.encrypt(this.plainText);
  }

  //   decrypt() {
  //   this.cipherText = this.encryptionService.decrypt(this.plainText);
  // }




    decrypt() {
    let encryptedString = this.plainText;

    // Check if the input is a URL with ?data=...
    try {
      if (this.plainText.includes('data=')) {
        const url = new URL(this.plainText.trim());
        const dataParam = url.searchParams.get('data');
        if (dataParam) {
          encryptedString = dataParam;
        }
      }

      // Attempt decryption
      this.cipherText = this.encryptionService.decrypt(encryptedString);
    } catch (error) {
      this.cipherText = 'Decryption failed or invalid input.';
    }
  }
    clear() {
    this.plainText = '';
    this.cipherText = '';
  }
}


