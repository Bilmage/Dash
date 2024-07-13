import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: {
    name: string;
    email: string;
    phone: string;
    county: string;
    city: string;
    description: string;
  } = {
    name: '',
    email: '',
    phone: '',
    county: '',
    city: '',
    description: '',
  };

  constructor(private toastService: ToastService) {}

  handleFormSubmit(event: Event) {
    event.preventDefault();
    this.toastService.show('Submission was successful!');
  }

  handleFormChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }
}
