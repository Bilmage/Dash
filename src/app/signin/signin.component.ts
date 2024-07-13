/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService } from '../toast.service';

interface FormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  formData: FormData = {
    email: '',
    password: '',
  };

  Signinimage = '../../assets/images/Signin.png';

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const fieldName: keyof FormData = target.name as keyof FormData;

    if (fieldName in this.formData) {
      this.formData[fieldName] = target.value;
    }
  }
  
 
  hidePassword: boolean = true;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    this.passwordInput.nativeElement.type = this.hidePassword ? 'password' : 'text';
  }


  

  

  constructor(private toastService: ToastService) {}

  handleSubmit() {
    this.toastService.show('Sign in was successful!');
  }
}
