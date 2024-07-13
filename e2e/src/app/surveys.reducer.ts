import { createReducer, on } from '@ngrx/store';
import { SurveysActions } from './surveys.actions';

export const surveysFeatureKey = 'surveys';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
