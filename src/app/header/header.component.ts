import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() className: string | undefined;
  @Input() mainText: string | undefined;
  @Input() secondaryText: string | undefined;

  Line = '../../assets/images/Line 1.svg';
}
