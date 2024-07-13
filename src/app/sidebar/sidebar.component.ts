import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isOpen: boolean | undefined;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  closeSidebar() {
    this.onClose.emit();
  }

  navigationItems = [
    { label: 'Home', path: '/', iconClass: 'fas fa-home' },
    { label: 'About', path: '/about', iconClass: 'fas fa-info-circle' },
    { label: 'Contact', path: '/contact', iconClass: 'fas fa-envelope' },
    {
      label: 'Register your business',
      path: '/businessregistration',
      iconClass: 'fas fa-clipboard',
    },
    { label: 'Sign up', path: '/signup', iconClass: 'fas fa-user-plus' },
    { label: 'Login', path: '/signin', iconClass: 'fas fa-sign-in-alt' },
  ];
}
