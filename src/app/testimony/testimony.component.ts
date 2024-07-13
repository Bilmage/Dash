import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent {
  defaultCheckedIndex = 1; // Set the default checked index here

  testimonialItems = [
    {
      id: 't-1',
      title: 'Práctica',
      description: 'Poner en práctica los conocimientos adquiridos.',
      imageUrl: 'https://i.pravatar.cc/200',
    },
    {
      id: 't-2',
      title: 'Práctica',
      description: 'Poner en práctica los conocimientos adquiridos.',
      imageUrl: 'https://i.pravatar.cc/200',
    },
    {
      id: 't-3',
      title: 'Práctica',
      description: 'Poner en práctica los conocimientos adquiridos.',
      imageUrl: 'https://i.pravatar.cc/200',
    },
    {
      id: 't-4',
      title: 'Práctica',
      description: 'Poner en práctica los conocimientos adquiridos.',
      imageUrl: 'https://i.pravatar.cc/200',
    },
    {
      id: 't-5',
      title: 'Práctica',
      description: 'Poner en práctica los conocimientos adquiridos.',
      imageUrl: 'https://i.pravatar.cc/200',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
