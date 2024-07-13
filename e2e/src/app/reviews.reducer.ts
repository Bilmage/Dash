import { createReducer, on } from '@ngrx/store';
import { ReviewsActions } from './reviews.actions';

export const reviewsFeatureKey = 'reviews';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
