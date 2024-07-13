import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.css'],
})
export class BackToTopButtonComponent {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  showButton: boolean = false;

  constructor() {
    this.checkScrollHeight();
  }

  checkScrollHeight() {
    if (!this.showButton && window.pageYOffset > 400) {
      this.showButton = true;
    } else if (this.showButton && window.pageYOffset <= 400) {
      this.showButton = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollHeight();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
