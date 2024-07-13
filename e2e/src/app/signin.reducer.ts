import { createReducer, on } from '@ngrx/store';
import { SigninActions } from './signin.actions';

export const signinFeatureKey = 'signin';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
