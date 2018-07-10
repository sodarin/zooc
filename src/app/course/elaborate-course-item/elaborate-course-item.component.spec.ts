import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborateCourseItemComponent } from './elaborate-course-item.component';

describe('ElaborateCourseItemComponent', () => {
  let component: ElaborateCourseItemComponent;
  let fixture: ComponentFixture<ElaborateCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaborateCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaborateCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
