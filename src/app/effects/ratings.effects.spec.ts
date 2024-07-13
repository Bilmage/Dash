import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RatingsEffects } from './ratings.effects';

describe('RatingsEffects', () => {
  let actions$: Observable<any>;
  let effects: RatingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RatingsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
