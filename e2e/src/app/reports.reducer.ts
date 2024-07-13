import { createReducer, on } from '@ngrx/store';
import { ReportsActions } from './reports.actions';

export const reportsFeatureKey = 'reports';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
