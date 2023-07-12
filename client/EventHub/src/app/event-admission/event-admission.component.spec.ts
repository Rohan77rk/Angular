import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdmissionComponent } from './event-admission.component';

describe('EventAdmissionComponent', () => {
  let component: EventAdmissionComponent;
  let fixture: ComponentFixture<EventAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
