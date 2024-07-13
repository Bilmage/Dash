import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  featuresData = [
    {
      title: 'Users',
      count: '11 345',
      icon: 'fa fa-users', // CSS class for FontAwesome or Angular Icons
      bgColor: '#63ccca',
    },
    {
      title: 'Comments',
      count: '12 456',
      icon: 'fa fa-comments', // CSS class for FontAwesome or Angular Icons
      bgColor: '#42858c',
    },
    {
      title: 'Ratings',
      count: '10 456',
      icon: 'fa fa-star', // CSS class for FontAwesome or Angular Icons
      bgColor: '#f78431',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // You can add any necessary properties or methods here.
}
