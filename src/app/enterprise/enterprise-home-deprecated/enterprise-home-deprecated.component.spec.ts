import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseHomeDeprecatedComponent } from './enterprise-home-deprecated.component';

describe('EnterpriseInfoComponent', () => {
  let component: EnterpriseHomeDeprecatedComponent;
  let fixture: ComponentFixture<EnterpriseHomeDeprecatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseHomeDeprecatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseHomeDeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
