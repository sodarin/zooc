import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDepartmentComponent } from './enterprise-department.component';

describe('EnterpriseDepartmentComponent', () => {
  let component: EnterpriseDepartmentComponent;
  let fixture: ComponentFixture<EnterpriseDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
