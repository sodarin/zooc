import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemInfoComponent } from './course-item-info.component';

describe('CourseItemInfoComponent', () => {
  let component: CourseItemInfoComponent;
  let fixture: ComponentFixture<CourseItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
