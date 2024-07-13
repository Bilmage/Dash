import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class ReviewsEffects {
  constructor(private actions$: Actions) {}
}
