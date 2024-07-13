import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EligibilitysectionComponent } from './eligibilitysection.component';

describe('EligibilitysectionComponent', () => {
  let component: EligibilitysectionComponent;
  let fixture: ComponentFixture<EligibilitysectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EligibilitysectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibilitysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
