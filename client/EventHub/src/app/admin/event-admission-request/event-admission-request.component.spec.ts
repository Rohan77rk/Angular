import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdmissionRequestComponent } from './event-admission-request.component';

describe('EventAdmissionRequestComponent', () => {
  let component: EventAdmissionRequestComponent;
  let fixture: ComponentFixture<EventAdmissionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdmissionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAdmissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
