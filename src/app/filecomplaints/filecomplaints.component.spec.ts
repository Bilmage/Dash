import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilecomplaintsComponent } from './filecomplaints.component';

describe('FilecomplaintsComponent', () => {
  let component: FilecomplaintsComponent;
  let fixture: ComponentFixture<FilecomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilecomplaintsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilecomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
