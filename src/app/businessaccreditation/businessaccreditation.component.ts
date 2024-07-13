import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-businessaccreditation',
  templateUrl: './businessaccreditation.component.html',
  styleUrls: ['./businessaccreditation.component.css'],
})
export class BusinessaccreditationComponent {
  formData = {
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessCategory: '',
    businessDescription: '',
    hasBeenInBusiness: 'Yes',
    location: null as null | string, // Updated type definition
    logo: null as null | string, // Updated type definition
    registrationDate: '',
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private toastService: ToastService) {}

  handleFormSubmit(event: Event) {
    event.preventDefault();
    this.toastService.show('Submission was successful!');
  }

  handleFileUpload(event: Event) {
    const logoFile = (event.target as HTMLInputElement).files?.[0];
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.formData.logo = e.target?.result as string;
      };
      reader.readAsDataURL(logoFile);
    }
  }

  handleFormChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }
  safaricom = '../../assets/images/Safaricom.png';

  handleSetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.formData.location = `${latitude}, ${longitude}`;
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
