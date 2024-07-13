import { Action, createReducer, on } from '@ngrx/store';
import { RatingsActions } from './ratings.actions';

export const ratingsFeatureKey = 'ratings';

// Define the RatingsState interface
export interface RatingsState {
  userRatings: { [userId: string]: number }; // Map of user IDs to ratings
  averageRating: number | null;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

export const initialState: RatingsState = {
  userRatings: {},
  averageRating: null,
  loading: false,
  error: null,
};

const _ratingsReducer = createReducer(
  initialState,

  // Fetch Ratings
  on(RatingsActions['Load Ratingss'], (state) => ({
    ...state,
    loading: true,
  })),
  on(RatingsActions['Load Ratingss Success'], (state, { data }) => ({
    ...state,
    userRatings: data,
    loading: false,
  })),
  on(RatingsActions['Load Ratingss Failure'], (state, { error }) => ({
    ...state,
    userRatings: {},
    error,
    loading: false,
  })),

  // Update Rating
  on(RatingsActions['Update Rating'], (state, { userId, rating }) => ({
    ...state,
    userRatings: { ...state.userRatings, [userId]: rating },
  })),

  // Delete Rating
  on(RatingsActions['Delete Rating'], (state, { userId }) => {
    const newRatings = { ...state.userRatings };
    delete newRatings[userId];
    return {
      ...state,
      userRatings: newRatings,
    };
  }),

  // Fetch Average Rating
  on(
    RatingsActions['Fetch Average Rating Success'],
    (state, { averageRating }) => ({
      ...state,
      averageRating,
    })
  )
);

export function ratingsReducer(
  state: RatingsState | undefined,
  action: Action
) {
  return _ratingsReducer(state, action);
}
