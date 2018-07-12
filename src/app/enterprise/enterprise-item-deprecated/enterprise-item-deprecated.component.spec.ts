import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseItemDeprecatedComponent } from './enterprise-item-deprecated.component';

describe('EnterpriseItemDeprecatedComponent', () => {
  let component: EnterpriseItemDeprecatedComponent;
  let fixture: ComponentFixture<EnterpriseItemDeprecatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseItemDeprecatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseItemDeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
