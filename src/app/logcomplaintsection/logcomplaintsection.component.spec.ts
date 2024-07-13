import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogcomplaintsectionComponent } from './logcomplaintsection.component';

describe('LogcomplaintsectionComponent', () => {
  let component: LogcomplaintsectionComponent;
  let fixture: ComponentFixture<LogcomplaintsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogcomplaintsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogcomplaintsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
