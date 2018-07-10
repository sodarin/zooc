import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDepartmentItemComponent } from './enterprise-department-item.component';

describe('EnterpriseDepartmentItemComponent', () => {
  let component: EnterpriseDepartmentItemComponent;
  let fixture: ComponentFixture<EnterpriseDepartmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseDepartmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDepartmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
