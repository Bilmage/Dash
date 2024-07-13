import { Component } from '@angular/core';

@Component({
  selector: 'app-eligibilitysection',
  templateUrl: './eligibilitysection.component.html',
  styleUrls: ['./eligibilitysection.component.css'],
})
export class EligibilitysectionComponent {
  checked: { [key: string]: boolean } = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  };

  handleChange(event: Event, name: string): void {
    const target = event.target as HTMLInputElement;
    this.checked = { ...this.checked, [name]: target.checked };
  }
}
