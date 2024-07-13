import { Component } from '@angular/core';

@Component({
  selector: 'app-logcomplaintsection',
  templateUrl: './logcomplaintsection.component.html',
  styleUrls: ['./logcomplaintsection.component.css'],
})
export class LogcomplaintsectionComponent {
  value = 'option1';

  handleChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
  }
}
