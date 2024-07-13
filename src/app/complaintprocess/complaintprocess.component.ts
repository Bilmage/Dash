import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complaintprocess',
  templateUrl: './complaintprocess.component.html',
  styleUrls: ['./complaintprocess.component.css'],
})
export class ComplaintprocessComponent {
  @Input() className: string | undefined;
}
