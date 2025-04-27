import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFirstComponent } from './task-first.component';

describe('TaskFirstComponent', () => {
  let component: TaskFirstComponent;
  let fixture: ComponentFixture<TaskFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
