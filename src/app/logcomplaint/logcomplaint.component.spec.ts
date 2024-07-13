import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogcomplaintComponent } from './logcomplaint.component';

describe('LogcomplaintComponent', () => {
  let component: LogcomplaintComponent;
  let fixture: ComponentFixture<LogcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogcomplaintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
