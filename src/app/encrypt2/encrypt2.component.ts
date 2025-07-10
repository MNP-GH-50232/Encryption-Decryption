import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../encryption.service';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to read route parameters

@Component({
  selector: 'app-encrypt2',
  templateUrl: './encrypt2.component.html',
  styleUrls: ['./encrypt2.component.css']
})
export class Encrypt2Component implements OnInit {

  constructor(
    private encryptionService: EncryptionService,
    private route: ActivatedRoute // Inject ActivatedRoute to access URL params
  ) {}

  ngOnInit(): void {
    // Try to extract 'data' from the URL parameter
    this.route.queryParams.subscribe(params => {
      const encryptedData = params['data']; // 'data' should be the name of the query parameter
      if (encryptedData) {
        // Decrypt the encrypted data if it's present in the URL
        this.cipherText = encryptedData;
        this.decrypt();
      }
    });
  }

  plainText: string = '';  // Input field for plain text
  cipherText: string = ''; // This will hold the encrypted or decrypted text

  // Method to encrypt the plain text
  encrypt() {
    if (this.plainText.trim() !== '') {
      this.cipherText = this.encryptionService.encrypt(this.plainText);
    } else {
      alert('Please enter some text to encrypt!');
    }
  }

  // Method to decrypt the cipher text
  decrypt() {
    if (this.cipherText.trim() !== '') { // Now use cipherText, not plainText for decryption
      this.plainText = this.encryptionService.decrypt(this.cipherText);
    } else {
      alert('Please enter some text to decrypt!');
    }
  }

  // Clear the textareas
  clear() {
    this.plainText = '';
    this.cipherText = '';
  }
}
