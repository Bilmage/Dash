import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinesscardComponent } from './businesscard.component';

describe('BusinesscardComponent', () => {
  let component: BusinesscardComponent;
  let fixture: ComponentFixture<BusinesscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinesscardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
