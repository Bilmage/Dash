/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService } from '../toast.service';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  role: string;
  [key: string]: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formData: FormData = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    role: 'Individual User',
  };

  isChecked = false;

  Signupimage = '../../assets/images/Signup.png';

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const fieldName = target.name;

    if (fieldName in this.formData) {
      this.formData[fieldName] = target.value;
    }
  }

  handleCheckboxChange() {
    this.isChecked = !this.isChecked;
  }

  hidePassword1: boolean = true;
  hidePassword2: boolean = true;


  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  togglePasswordVisibility1() {
    this.hidePassword1 = !this.hidePassword1;
    this.passwordInput.nativeElement.type = this.hidePassword1 ? 'password' : 'text';
  }
  togglePasswordVisibility2() {
    this.hidePassword2 = !this.hidePassword2;
    this.passwordInput.nativeElement.type = this.hidePassword2 ? 'password' : 'text';
  }
  constructor(private toastService: ToastService) {}

  handleSubmit() {
    this.toastService.show('Sign up was successful!');
  }
}
