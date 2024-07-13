import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-corevalues',
  templateUrl: './corevalues.component.html',
  styleUrls: ['./corevalues.component.css'],
})
export class CorevaluesComponent {
  @Input() className: string | undefined;

  public servicesData = [
    {
      image: 'shield-check.svg',
      alt: 'Shield check',
      title: 'Customer-Centricity',
      description:
        'We prioritize the needs and satisfaction of our customers in all aspects of our work.',
    },
    {
      image: 'image.svg',
      alt: 'Shield check',
      title: 'Integrity',
      description:
        'We are committed to honesty, transparency, and ethical business practices.',
    },
    {
      image: 'shield-check-2.svg',
      alt: 'Shield check',
      title: 'Collaboration',
      description:
        'We work collaboratively with our clients, partners, and stakeholders to achieve common goals.',
    },
    {
      image: 'shield-check.svg',
      alt: 'Shield check',
      title: 'Sustainability',
      description:
        "Ensure regulatory compliance and effective complaint management with Bizresolve's expert assistance.",
    },
    {
      image: 'shield-check.svg',
      alt: 'Shield check',
      title: 'Professionalism',
      description:
        'We conduct ourselves with professionalism and strive for excellence in all that we do.',
    },
    {
      image: 'shield-check.svg',
      alt: 'Shield check',
      title: 'Innovation',
      description:
        'We embrace creativity and innovation to continuously improve our services and stay ahead of the curve.',
    },
    {
      image: 'shield-check.svg',
      alt: 'Shield check',
      title: 'Accountability',
      description:
        'We take responsibility for our actions and are accountable to our clients, partners, and stakeholders.',
    },
  ];
}
