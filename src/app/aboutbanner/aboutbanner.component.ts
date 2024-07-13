import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutbanner',
  template: ` <div [ngClass]="'about-banner ' + className"></div> `,
  styleUrls: ['./aboutbanner.component.css'],
})
export class AboutbannerComponent {
  @Input() className: string | undefined;
}
