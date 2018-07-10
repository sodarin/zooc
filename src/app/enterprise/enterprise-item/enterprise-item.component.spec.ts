import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseItemComponent } from './enterprise-item.component';

describe('EnterpriseItemComponent', () => {
  let component: EnterpriseItemComponent;
  let fixture: ComponentFixture<EnterpriseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
