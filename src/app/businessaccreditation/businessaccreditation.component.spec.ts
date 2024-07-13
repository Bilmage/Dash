import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessaccreditationComponent } from './businessaccreditation.component';

describe('BusinessaccreditationComponent', () => {
  let component: BusinessaccreditationComponent;
  let fixture: ComponentFixture<BusinessaccreditationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessaccreditationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessaccreditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
