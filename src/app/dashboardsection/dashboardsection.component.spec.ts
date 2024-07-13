import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardsectionComponent } from './dashboardsection.component';

describe('DashboardsectionComponent', () => {
  let component: DashboardsectionComponent;
  let fixture: ComponentFixture<DashboardsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
