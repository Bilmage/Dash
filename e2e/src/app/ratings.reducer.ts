import { createReducer, on } from '@ngrx/store';
import { RatingsActions } from './ratings.actions';

export const ratingsFeatureKey = 'ratings';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
