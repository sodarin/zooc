import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborateCourseComponent } from './elaborate-course.component';

describe('ElaborateCourseComponent', () => {
  let component: ElaborateCourseComponent;
  let fixture: ComponentFixture<ElaborateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaborateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaborateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
