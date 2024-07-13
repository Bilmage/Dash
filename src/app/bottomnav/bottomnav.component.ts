import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.css'],
})
export class BottomnavComponent {
  @Input() className: string | undefined;
  @Input() nextPath: string | undefined;
}
