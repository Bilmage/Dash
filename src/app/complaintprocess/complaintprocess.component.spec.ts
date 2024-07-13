import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplaintprocessComponent } from './complaintprocess.component';

describe('ComplaintprocessComponent', () => {
  let component: ComplaintprocessComponent;
  let fixture: ComponentFixture<ComplaintprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplaintprocessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
