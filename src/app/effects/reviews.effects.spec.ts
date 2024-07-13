import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReviewsEffects } from './reviews.effects';

describe('ReviewsEffects', () => {
  let actions$: Observable<any>;
  let effects: ReviewsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ReviewsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
