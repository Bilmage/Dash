import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService } from '../toast.service';

interface FormData {
  newpassword: string;
  confirmpassword: string;
}
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent {
  formData: FormData = {
    newpassword: '',
    confirmpassword: '',
  };

  Resetimage = '../../assets/images/reset.png';

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const fieldName: keyof FormData = target.name as keyof FormData;

    if (fieldName in this.formData) {
      this.formData[fieldName] = target.value;
    }
  }

  hidePassword1 = true;
  hidePassword2 = true;


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
    this.toastService.show('Password reset was successful!');
  }
}
