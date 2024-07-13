import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visionsection',
  templateUrl: './visionsection.component.html',
  styleUrls: ['./visionsection.component.css'],
})
export class VisionsectionComponent {
  @Input() className: string | undefined;
}
