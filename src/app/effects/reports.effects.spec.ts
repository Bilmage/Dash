import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReportsEffects } from './reports.effects';

describe('ReportsEffects', () => {
  let actions$: Observable<any>;
  let effects: ReportsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ReportsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
