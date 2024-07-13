import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the ReviewData interface
interface ReviewData {
  userId: string;
  businessId: string;
  review: string;
}

// Define the AllReviewsData interface
interface AllReviewsData {
  businessId: string;
  reviews: ReviewData[];
}

export const ReviewsActions = createActionGroup({
  source: 'Reviews',
  events: {
    // Actions for individual user reviews
    'Create Review': props<{ data: ReviewData }>(),
    'Create Review Success': emptyProps(),
    'Create Review Failure': props<{ error: unknown }>(),

    'Update Review': props<{ data: ReviewData }>(),
    'Update Review Success': emptyProps(),
    'Update Review Failure': props<{ error: unknown }>(),

    'Delete Review': props<{ userId: string; businessId: string }>(),
    'Delete Review Success': emptyProps(),
    'Delete Review Failure': props<{ error: unknown }>(),

    'Fetch User Review': props<{ userId: string; businessId: string }>(),
    'Fetch User Review Success': props<{ data: ReviewData }>(),
    'Fetch User Review Failure': props<{ error: unknown }>(),

    // Actions for fetching all reviews for a business
    'Fetch All Reviews': props<{ businessId: string }>(),
    'Fetch All Reviews Success': props<{ data: AllReviewsData }>(),
    'Fetch All Reviews Failure': props<{ error: unknown }>(),
  },
});
