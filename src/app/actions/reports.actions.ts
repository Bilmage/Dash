import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the ReportData interface
interface ReportData {
  userId: string;
  businessId: string;
  report: string;
  fileLink: string; // Link to PDF, CSV, or Excel file
}

// Define the AllReportsData interface
interface AllReportsData {
  businessId: string;
  reports: ReportData[];
}

export const ReportsActions = createActionGroup({
  source: 'Reports',
  events: {
    // Actions for individual user reports
    'Create Report': props<{ data: ReportData }>(),
    'Create Report Success': emptyProps(),
    'Create Report Failure': props<{ error: unknown }>(),

    'Update Report': props<{ data: ReportData }>(),
    'Update Report Success': emptyProps(),
    'Update Report Failure': props<{ error: unknown }>(),

    'Delete Report': props<{ userId: string; businessId: string }>(),
    'Delete Report Success': emptyProps(),
    'Delete Report Failure': props<{ error: unknown }>(),

    'Fetch User Report': props<{ userId: string; businessId: string }>(),
    'Fetch User Report Success': props<{ data: ReportData }>(),
    'Fetch User Report Failure': props<{ error: unknown }>(),

    // Actions for fetching all reports for a business
    'Fetch All Reports': props<{ businessId: string }>(),
    'Fetch All Reports Success': props<{ data: AllReportsData }>(),
    'Fetch All Reports Failure': props<{ error: unknown }>(),
  },
});
