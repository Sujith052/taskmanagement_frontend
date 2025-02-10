import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorktaskComponent } from './add-worktask.component';

describe('AddWorktaskComponent', () => {
  let component: AddWorktaskComponent;
  let fixture: ComponentFixture<AddWorktaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorktaskComponent]
    });
    fixture = TestBed.createComponent(AddWorktaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
