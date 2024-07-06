import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { License, LicensekeyModule } from 'licensekey';
import { Licensekey, License, LicensekeyModule } from 'licensekey';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, LicensekeyModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private license: Licensekey) {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      kalaridob: ['', Validators.required],
      mobile: ['', Validators.required],
      whatsapp: [''],
      email: ['', [Validators.required, Validators.email]],
      parentname: [''],
      occupation: [''],
      kalarigender: ['', Validators.required],
      kalariaddress: [''],
      password: ['', Validators.required],
      vpassword: ['', Validators.required],
      img: [''],
      kalariaccept: [false, Validators.requiredTrue]
      
    });
  }

  
  onSubmit() {
    
  }

  stringToHash(str: string) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }
  encodeBase32(value: number) {
    const base32Chars = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    return base32Chars.charAt(value);
  }
}
