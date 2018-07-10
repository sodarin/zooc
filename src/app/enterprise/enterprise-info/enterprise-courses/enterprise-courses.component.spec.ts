import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCoursesComponent } from './enterprise-courses.component';

describe('EnterpriseCoursesComponent', () => {
  let component: EnterpriseCoursesComponent;
  let fixture: ComponentFixture<EnterpriseCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
