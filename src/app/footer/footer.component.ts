import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email = '';

  handleEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  handleSubmit() {
    // Send the email to your backend server for storage
  }
}
