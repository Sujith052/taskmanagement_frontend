import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTaskComponent } from './work-task.component';

describe('WorkTaskComponent', () => {
  let component: WorkTaskComponent;
  let fixture: ComponentFixture<WorkTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTaskComponent]
    });
    fixture = TestBed.createComponent(WorkTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
