import { Action, createReducer, on } from '@ngrx/store';
import { ReportsActions } from './reports.actions';

export const reportsFeatureKey = 'reports';

// Define the ReportsState interface
export interface ReportsState {
  reports: { [reportId: string]: { content: string; link: string } }; // Replace with your specific report model
  loading: boolean;
  error: any;
}

export const initialState: ReportsState = {
  reports: {},
  loading: false,
  error: null,
};

const _reportsReducer = createReducer(
  initialState,

  // Fetch All Reports
  on(ReportsActions['Load Reportss'], (state) => ({
    ...state,
    loading: true,
  })),
  on(ReportsActions['Load Reportss Success'], (state, { data }) => ({
    ...state,
    reports: data,
    loading: false,
  })),
  on(ReportsActions['Load Reportss Failure'], (state, { error }) => ({
    ...state,
    reports: {},
    error,
    loading: false,
  })),

  // Update Report
  on(ReportsActions['Update Report'], (state, { reportId, report }) => ({
    ...state,
    reports: { ...state.reports, [reportId]: report },
  })),

  // Delete Report
  on(ReportsActions['Delete Report'], (state, { reportId }) => {
    const newReports = { ...state.reports };
    delete newReports[reportId];
    return {
      ...state,
      reports: newReports,
    };
  })

  // ... add more actions for adding, editing, deleting reports as needed
);

export function reportsReducer(
  state: ReportsState | undefined,
  action: Action
) {
  return _reportsReducer(state, action);
}
