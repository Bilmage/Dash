import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualsectionComponent } from './individualsection.component';

describe('IndividualsectionComponent', () => {
  let component: IndividualsectionComponent;
  let fixture: ComponentFixture<IndividualsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
