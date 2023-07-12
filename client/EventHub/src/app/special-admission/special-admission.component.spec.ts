import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAdmissionComponent } from './special-admission.component';

describe('SpecialAdmissionComponent', () => {
  let component: SpecialAdmissionComponent;
  let fixture: ComponentFixture<SpecialAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
