import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessprofilesectionComponent } from './businessprofilesection.component';

describe('BusinessprofilesectionComponent', () => {
  let component: BusinessprofilesectionComponent;
  let fixture: ComponentFixture<BusinessprofilesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessprofilesectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessprofilesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
