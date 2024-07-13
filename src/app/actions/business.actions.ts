import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the BusinessData interface
interface BusinessData {
  businessId: string;
  businessName: string;
  owner: string;
  address: string;
  location: string;
  businessAddress: string;
  // other optional fields
}

// Define the SignInSuccessData interface (similar to User)
interface SignInSuccessData {
  businessId: string;
  token: string;
}

export const BusinessActions = createActionGroup({
  source: 'Business',
  events: {
    'Load Business': emptyProps(),
    'Load Business Success': props<{ data: BusinessData }>(),
    'Load Business Failure': props<{ error: unknown }>(),

    // Actions for Google authentication
    'Google Sign In Business': emptyProps(),
    'Google Sign In Business Success': props<{ data: SignInSuccessData }>(),
    'Google Sign In Business Failure': props<{ error: unknown }>(),

    // Actions for email/password authentication
    'Email Sign In Business': props<{ username: string; password: string }>(),
    'Email Sign In Business Success': props<{ data: SignInSuccessData }>(),
    'Email Sign In Business Failure': props<{ error: unknown }>(),

    // Optionally, add actions for Sign Out
    'Sign Out Business': emptyProps(),
    'Sign Out Business Success': emptyProps(),
    'Sign Out Business Failure': props<{ error: unknown }>(),
  },
});
