import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerbanner',
  template: ` <div [ngClass]="'header-banner ' + className"></div> `,
  styleUrls: ['./headerbanner.component.css'],
})
export class HeaderbannerComponent {
  @Input() className: string | undefined;
}
