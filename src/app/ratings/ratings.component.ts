import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent {
  rating = 0;
  comment = '';
  safaricom = '../../assets/images/Safaricom.png';

  handleRatingChange(newRating: number) {
    this.rating = newRating;
  }

  handleCommentChange(event: Event) {
    this.comment = (event.target as HTMLInputElement).value;
  }
  constructor(private toastService: ToastService) {}

  handleSubmit() {
    try {
      this.toastService.show('Rating and comment submitted successfully');
    } catch (error) {
      console.error(error);
      this.toastService.show('Failed to submit rating and comment');
    }
  }
}
