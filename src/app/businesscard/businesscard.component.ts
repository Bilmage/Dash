import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css'],
})
export class BusinesscardComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() business: any;

  businessData = [
    {
      name: 'Safaricom',
      type: 'Internet',
      imageSrc: 'assets/images/Safaricom.png',
      description:
        'It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region.',
      location: 'Nairobi, Westlands',
      isNew: true,
      isCertified: true,
      rating: 4,
    },
  ];

  faBookmark = 'faBookmark';
  faStar = 'faStar';

  certifiedIcon = '../../assets/icons/Certified.png';
  heartIcon = '../../assets/icons/Heart.svg';
}
