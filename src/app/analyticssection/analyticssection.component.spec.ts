import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticssectionComponent } from './analyticssection.component';

describe('AnalyticssectionComponent', () => {
  let component: AnalyticssectionComponent;
  let fixture: ComponentFixture<AnalyticssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticssectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
