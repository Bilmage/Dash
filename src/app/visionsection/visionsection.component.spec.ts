import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisionsectionComponent } from './visionsection.component';

describe('VisionsectionComponent', () => {
  let component: VisionsectionComponent;
  let fixture: ComponentFixture<VisionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisionsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
