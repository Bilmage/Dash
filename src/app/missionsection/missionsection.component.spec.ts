import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionsectionComponent } from './missionsection.component';

describe('MissionsectionComponent', () => {
  let component: MissionsectionComponent;
  let fixture: ComponentFixture<MissionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionsectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
