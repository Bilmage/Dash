import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-filecomplaints',
  templateUrl: './filecomplaints.component.html',
  styleUrls: ['./filecomplaints.component.css'],
})
export class FilecomplaintsComponent {
  formData = {
    businessName: '',
    businessPhysicalAddress: '',
    businessEmail: '',
    businessPhone: '',
    county: '',
    complaintDescription: '',
    logo: '',
  };

  constructor(private toastService: ToastService) {}

  handleFormSubmit(event: Event) {
    event.preventDefault();
    this.toastService.show('Submission was successful!');
  }

  handleFileUpload(event: Event): void {
    const logoFile = (event.target as HTMLInputElement).files?.[0];
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.logo = e.target.result;
      };
      reader.readAsDataURL(logoFile);
    }
  }

  handleFormChange(event: any): void {
    const { name, value } = event.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }
}
