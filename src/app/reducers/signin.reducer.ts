import { Action, createReducer, on } from '@ngrx/store';
import { SigninActions } from './signin.actions';

export const signinFeatureKey = 'signin';

// Define the SigninState interface
export interface SigninState {
  isAuthenticated: boolean;
  user: any; // Replace with an appropriate user model
  loading: boolean;
  error: any;
}

export const initialState: SigninState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const signinReducerInternal = createReducer(
  initialState,

  // Signin
  on(SigninActions.events['Signin'], (state) => ({
    ...state,
    loading: true,
  })),
  on(SigninActions.events['Signin Success'], (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    loading: false,
  })),
  on(SigninActions.events['Signin Failure'], (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error,
    loading: false,
  })),

  // Signout
  on(SigninActions.events['Signout'], (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }))

  // ... add more actions as needed
);

export function reducer(state: SigninState | undefined, action: Action) {
  return signinReducerInternal(state, action);
}
