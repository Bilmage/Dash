import { Action, createReducer, on } from '@ngrx/store';
import { ReviewsActions } from './reviews.actions';

export const reviewsFeatureKey = 'reviews';

// Define the ReviewsState interface
export interface ReviewsState {
  reviews: any[]; // Replace with an appropriate review model
  currentReview: any; // Replace with an appropriate review model
  loading: boolean;
  error: any;
}

export const initialState: ReviewsState = {
  reviews: [],
  currentReview: null,
  loading: false,
  error: null,
};

const reviewsReducerInternal = createReducer(
  initialState,

  // Fetch All Reviews
  on(ReviewsActions.events['Fetch Reviews'], (state) => ({
    ...state,
    loading: true,
  })),
  on(ReviewsActions.events['Fetch Reviews Success'], (state, { reviews }) => ({
    ...state,
    reviews,
    loading: false,
  })),
  on(ReviewsActions.events['Fetch Reviews Failure'], (state, { error }) => ({
    ...state,
    reviews: [],
    error,
    loading: false,
  })),

  // Fetch Single Review
  on(ReviewsActions.events['Fetch Single Review'], (state) => ({
    ...state,
    loading: true,
  })),
  on(
    ReviewsActions.events['Fetch Single Review Success'],
    (state, { review }) => ({
      ...state,
      currentReview: review,
      loading: false,
    })
  ),
  on(
    ReviewsActions.events['Fetch Single Review Failure'],
    (state, { error }) => ({
      ...state,
      currentReview: null,
      error,
      loading: false,
    })
  ),

  // Add Review
  on(ReviewsActions.events['Add Review'], (state) => ({
    ...state,
    loading: true,
  })),
  on(ReviewsActions.events['Add Review Success'], (state, { review }) => ({
    ...state,
    reviews: [...state.reviews, review],
    loading: false,
  })),
  on(ReviewsActions.events['Add Review Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Edit Review
  on(ReviewsActions.events['Edit Review'], (state) => ({
    ...state,
    loading: true,
  })),
  on(ReviewsActions.events['Edit Review Success'], (state, { review }) => ({
    ...state,
    reviews: state.reviews.map((r) => (r.id === review.id ? review : r)),
    loading: false,
  })),
  on(ReviewsActions.events['Edit Review Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Delete Review
  on(ReviewsActions.events['Delete Review'], (state) => ({
    ...state,
    loading: true,
  })),
  on(ReviewsActions.events['Delete Review Success'], (state, { reviewId }) => ({
    ...state,
    reviews: state.reviews.filter((r) => r.id !== reviewId),
    loading: false,
  })),
  on(ReviewsActions.events['Delete Review Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function reducer(state: ReviewsState | undefined, action: Action) {
  return reviewsReducerInternal(state, action);
}
