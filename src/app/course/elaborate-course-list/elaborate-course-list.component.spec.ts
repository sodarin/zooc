import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborateCourseListComponent } from './elaborate-course-list.component';

describe('ElaborateCourseComponent', () => {
  let component: ElaborateCourseListComponent;
  let fixture: ComponentFixture<ElaborateCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaborateCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaborateCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
