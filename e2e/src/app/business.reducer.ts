import { createReducer, on } from '@ngrx/store';
import { BusinessActions } from './business.actions';

export const businessFeatureKey = 'business';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
