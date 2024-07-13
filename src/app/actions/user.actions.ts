import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the UserData interface with 'role'
interface UserData {
  userId: string;
  email: string;
  role: string; // could also be roles: string[] for multiple roles
  // other optional fields
}

// Define the SignInSuccessData interface
interface SignInSuccessData {
  userId: string;
  token: string;
}

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': emptyProps(),
    'Load User Success': props<{ data: UserData }>(),
    'Load User Failure': props<{ error: unknown }>(),

    // Actions for Google authentication
    'Google Sign In': emptyProps(),
    'Google Sign In Success': props<{ data: SignInSuccessData }>(),
    'Google Sign In Failure': props<{ error: unknown }>(),

    // Actions for email/password authentication
    'Email Sign In': props<{ email: string; password: string }>(),
    'Email Sign In Success': props<{ data: SignInSuccessData }>(),
    'Email Sign In Failure': props<{ error: unknown }>(),

    // Optionally, add actions for Sign Out
    'Sign Out': emptyProps(),
    'Sign Out Success': emptyProps(),
    'Sign Out Failure': props<{ error: unknown }>(),
  },
});
