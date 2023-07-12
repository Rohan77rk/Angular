import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAdmissionRequestComponent } from './special-admission-request.component';

describe('SpecialAdmissionRequestComponent', () => {
  let component: SpecialAdmissionRequestComponent;
  let fixture: ComponentFixture<SpecialAdmissionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAdmissionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAdmissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
