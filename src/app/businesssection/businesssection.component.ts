import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-businesssection',
  templateUrl: './businesssection.component.html',
  styleUrls: ['./businesssection.component.css'],
})
export class BusinesssectionComponent {
  @Input() individual: any;

  businesspic = '../../assets/images/Bizpic.png';
}
