import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() icon: any;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
