import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individualsection',
  templateUrl: './individualsection.component.html',
  styleUrls: ['./individualsection.component.css'],
})
export class IndividualsectionComponent {
  @Input() individual: any;

  individualpic = '../../assets/images/Individual.png';
}
