import { createActionGroup, emptyProps, props } from '@ngrx/store';

// Define the SurveyData interface
interface SurveyData {
  userId: string;
  businessId: string;
  responses: Record<string, any>; // key-value pairs for survey questions and answers
  fileLink?: string; // Optional link to PDF, CSV, or Excel file
}

// Define the AllSurveysData interface
interface AllSurveysData {
  businessId: string;
  surveys: SurveyData[];
}

export const SurveysActions = createActionGroup({
  source: 'Surveys',
  events: {
    // Actions for individual user surveys
    'Create Survey': props<{ data: SurveyData }>(),
    'Create Survey Success': emptyProps(),
    'Create Survey Failure': props<{ error: unknown }>(),

    'Update Survey': props<{ data: SurveyData }>(),
    'Update Survey Success': emptyProps(),
    'Update Survey Failure': props<{ error: unknown }>(),

    'Delete Survey': props<{ userId: string; businessId: string }>(),
    'Delete Survey Success': emptyProps(),
    'Delete Survey Failure': props<{ error: unknown }>(),

    'Fetch User Survey': props<{ userId: string; businessId: string }>(),
    'Fetch User Survey Success': props<{ data: SurveyData }>(),
    'Fetch User Survey Failure': props<{ error: unknown }>(),

    // Actions for fetching all surveys for a business
    'Fetch All Surveys': props<{ businessId: string }>(),
    'Fetch All Surveys Success': props<{ data: AllSurveysData }>(),
    'Fetch All Surveys Failure': props<{ error: unknown }>(),
  },
});
