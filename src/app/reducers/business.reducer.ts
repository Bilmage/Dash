import { Action, createReducer, on } from '@ngrx/store';
import { BusinessActions } from './business.actions';

export const businessFeatureKey = 'business';

// Define the BusinessState interface
export interface BusinessState {
  businesses: any[]; // Replace with your specific business model
  currentBusiness: any; // Replace with your specific business model
  loading: boolean;
  error: any;
}

export const initialState: BusinessState = {
  businesses: [],
  currentBusiness: null,
  loading: false,
  error: null,
};

const _businessReducer = createReducer(
  initialState,

  // Fetch All Businesses
  on(BusinessActions['Fetch Businesses'], (state) => ({
    ...state,
    loading: true,
  })),
  on(BusinessActions['Fetch Businesses Success'], (state, { businesses }) => ({
    ...state,
    businesses,
    loading: false,
  })),
  on(BusinessActions['Fetch Businesses Failure'], (state, { error }) => ({
    ...state,
    businesses: [],
    error,
    loading: false,
  })),

  // Fetch Single Business
  on(BusinessActions['Fetch Single Business'], (state) => ({
    ...state,
    loading: true,
  })),
  on(
    BusinessActions['Fetch Single Business Success'],
    (state, { business }) => ({
      ...state,
      currentBusiness: business,
      loading: false,
    })
  ),
  on(BusinessActions['Fetch Single Business Failure'], (state, { error }) => ({
    ...state,
    currentBusiness: null,
    error,
    loading: false,
  }))

  // ... add more actions for adding, editing, deleting businesses as needed
);

export function businessReducer(
  state: BusinessState | undefined,
  action: Action
) {
  return _businessReducer(state, action);
}
