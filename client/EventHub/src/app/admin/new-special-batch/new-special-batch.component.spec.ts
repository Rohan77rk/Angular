import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialBatchComponent } from './new-special-batch.component';

describe('NewSpecialBatchComponent', () => {
  let component: NewSpecialBatchComponent;
  let fixture: ComponentFixture<NewSpecialBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpecialBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSpecialBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
