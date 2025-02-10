import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkTaskComponent } from './editwork-task.component';

describe('EditworkTaskComponent', () => {
  let component: EditworkTaskComponent;
  let fixture: ComponentFixture<EditworkTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditworkTaskComponent]
    });
    fixture = TestBed.createComponent(EditworkTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
