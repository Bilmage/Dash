import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the RatingData interface
interface RatingData {
  userId: string;
  businessId: string;
  rating: number; // should be between 1 and 5
}

// Define the AverageRatingData interface
interface AverageRatingData {
  businessId: string;
  averageRating: number;
}

export const RatingsActions = createActionGroup({
  source: 'Ratings',
  events: {
    // Actions for individual user ratings
    'Create Rating': props<{ data: RatingData }>(),
    'Create Rating Success': emptyProps(),
    'Create Rating Failure': props<{ error: unknown }>(),

    'Update Rating': props<{ data: RatingData }>(),
    'Update Rating Success': emptyProps(),
    'Update Rating Failure': props<{ error: unknown }>(),

    'Delete Rating': props<{ userId: string; businessId: string }>(),
    'Delete Rating Success': emptyProps(),
    'Delete Rating Failure': props<{ error: unknown }>(),

    'Fetch User Rating': props<{ userId: string; businessId: string }>(),
    'Fetch User Rating Success': props<{ data: RatingData }>(),
    'Fetch User Rating Failure': props<{ error: unknown }>(),

    // Actions for average ratings
    'Fetch Average Rating': props<{ businessId: string }>(),
    'Fetch Average Rating Success': props<{ data: AverageRatingData }>(),
    'Fetch Average Rating Failure': props<{ error: unknown }>(),
  },
});
