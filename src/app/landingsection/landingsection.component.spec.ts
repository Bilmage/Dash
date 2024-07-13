import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingsectionComponent } from './landingsection.component';

describe('LandingsectionComponent', () => {
  let component: LandingsectionComponent;
  let fixture: ComponentFixture<LandingsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
