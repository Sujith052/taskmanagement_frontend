import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRegComponent } from './work-reg.component';

describe('WorkRegComponent', () => {
  let component: WorkRegComponent;
  let fixture: ComponentFixture<WorkRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkRegComponent]
    });
    fixture = TestBed.createComponent(WorkRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
