import { createReducer, on } from '@ngrx/store';
import { SignupActions } from './signup.actions';

export const signupFeatureKey = 'signup';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
