import { Action, createReducer, on } from '@ngrx/store';
import { SignupActions } from './signup.actions';

export const signupFeatureKey = 'signup';

// Define the SignupState interface
export interface SignupState {
  user: any; // Replace with an appropriate user model
  business: any; // Replace with an appropriate business model
  loading: boolean;
  error: any;
}

export const initialState: SignupState = {
  user: null,
  business: null,
  loading: false,
  error: null,
};

const signupReducerInternal = createReducer(
  initialState,

  // User Signup
  on(SignupActions.events['User Signup'], (state) => ({
    ...state,
    loading: true,
  })),
  on(SignupActions.events['User Signup Success'], (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(SignupActions.events['User Signup Failure'], (state, { error }) => ({
    ...state,
    user: null,
    error,
    loading: false,
  })),

  // Business Signup
  on(SignupActions.events['Business Signup'], (state) => ({
    ...state,
    loading: true,
  })),
  on(
    SignupActions.events['Business Signup Success'],
    (state, { business }) => ({
      ...state,
      business,
      loading: false,
    })
  ),
  on(SignupActions.events['Business Signup Failure'], (state, { error }) => ({
    ...state,
    business: null,
    error,
    loading: false,
  }))

  // ... add more actions as needed
);

export function reducer(state: SignupState | undefined, action: Action) {
  return signupReducerInternal(state, action);
}
