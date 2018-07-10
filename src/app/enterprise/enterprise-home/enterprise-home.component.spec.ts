import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseHomeComponent } from './enterprise-home.component';

describe('EnterpriseHomeComponent', () => {
  let component: EnterpriseHomeComponent;
  let fixture: ComponentFixture<EnterpriseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
