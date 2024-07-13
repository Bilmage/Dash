import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

// Define the UserData interface
interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Define the initial state
export interface UserState {
  users: UserData[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducerInternal = createReducer(
  initialState,

  // Load Users
  on(UserActions.events['Load Users'], (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.events['Load Users Success'], (state, { data }) => ({
    ...state,
    users: data as UserData[],
    loading: false,
  })),
  on(UserActions.events['Load Users Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Create User
  on(UserActions.events['Create User'], (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.events['Create User Success'], (state, { data }) => ({
    ...state,
    users: [...state.users, data as UserData],
    loading: false,
  })),
  on(UserActions.events['Create User Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Update User
  on(UserActions.events['Update User'], (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.events['Update User Success'], (state, { data }) => {
    const updatedUser = data as UserData;
    const updatedUsers = state.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    return {
      ...state,
      users: updatedUsers,
      loading: false,
    };
  }),
  on(UserActions.events['Update User Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Delete User
  on(UserActions.events['Delete User'], (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.events['Delete User Success'], (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== id),
    loading: false,
  })),
  on(UserActions.events['Delete User Failure'], (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))

  // ... add more actions as needed
);

export function userReducer(state: UserState | undefined, action: Action) {
  return userReducerInternal(state, action);
}
