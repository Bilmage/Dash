import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinesssectionComponent } from './businesssection.component';

describe('BusinesssectionComponent', () => {
  let component: BusinesssectionComponent;
  let fixture: ComponentFixture<BusinesssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinesssectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinesssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
