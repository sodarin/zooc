import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListDeprecatedComponent } from './course-list-deprecated.component';

describe('CourseListDeprecatedComponent', () => {
  let component: CourseListDeprecatedComponent;
  let fixture: ComponentFixture<CourseListDeprecatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListDeprecatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListDeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
