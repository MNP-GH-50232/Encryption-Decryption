import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



plainText: string = '';
  cipherText: string = '';

   constructor(private encryptionService: EncryptionService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  encrypt() {
    this.cipherText = this.encryptionService.encrypt(this.plainText);
  }

    decrypt() {
    this.cipherText = this.encryptionService.decrypt(this.plainText);
  }
    clear() {
    this.plainText = '';
    this.cipherText = '';
  }
}






















































 // src/app/aes/aes.component.ts
// import { Component } from '@angular/core';
// import { EncryptionService } from '../encryption.service';

// @Component({
//   selector: 'app-aes',
//   templateUrl: './aes.component.html',
//   styleUrls: ['./aes.component.css']
// })
// export class AesComponent {

// --------------------------------------------------------------------------------------------------------------------------------

//   plainText: string = '';
//   cipherText: string = '';
//   decryptedText: string = '';

//   constructor(private encryptionService: EncryptionService) {}
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   encrypt() {
//     this.cipherText = this.encryptionService.encrypt(this.plainText);
//   }

//   decrypt() {
//     this.decryptedText = this.encryptionService.decrypt(this.cipherText);
//   }

//   clear() {
//     this.plainText = '';
//     this.cipherText = '';
//     this.decryptedText = '';
//   }
// }




// --------------------------------------------------------------------------------------------------------------
