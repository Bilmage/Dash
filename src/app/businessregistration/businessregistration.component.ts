import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-businessregistration',
  templateUrl: './businessregistration.component.html',
  styleUrls: ['./businessregistration.component.css'],
})
export class BusinessregistrationComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any = {
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessPhysicalAddress: {
      county: '',
      city: '',
    },
    businessCategory: '',
    businessDescription: '',
    hasBeenInBusiness: 'Yes',
    location: null,
    logo: null,
    registrationDate: '',
  };

  constructor(private toastService: ToastService) {}

  handleFormSubmit(event: Event) {
    event.preventDefault();
    this.toastService.show('Submission was successful!');
  }
  Registrationimage = '../../assets/images/register.png';

  handleFileUpload(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const logoFile = target.files?.[0]; // Use optional chaining
      if (logoFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.logo = e.target?.result as string;
        };
        reader.readAsDataURL(logoFile);
      }
    }
  }
  safaricom = '../../assets/images/Safaricom.png';

  Lottie = '../../assets/Lottie/ApplicationAnimation.json';

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
