import { Component, ElementRef, ViewChild } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
// } from '@angular/animations';

@Component({
  selector: 'app-landingsection',
  templateUrl: './landingsection.component.html',
  styleUrls: ['./landingsection.component.css'],
})
export class LandingsectionComponent {
  @ViewChild('bannerElement') bannerElement!: ElementRef;

  bannerImage = '../../assets/images/TMT.png';
}
