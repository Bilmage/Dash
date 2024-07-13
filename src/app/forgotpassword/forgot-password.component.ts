import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

interface FormData {
  email: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotpasswordComponent {
  formData: FormData = {
    email: '',
  };

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const fieldName: keyof FormData = target.name as keyof FormData;

    if (fieldName in this.formData) {
      this.formData[fieldName] = target.value;
    }
  }
  Forgotimage = '../../assets/images/Forgot.png';

  constructor(private toastService: ToastService) {}

  handleSubmit() {
    this.toastService.show('Submission was successful!');
  }
}
