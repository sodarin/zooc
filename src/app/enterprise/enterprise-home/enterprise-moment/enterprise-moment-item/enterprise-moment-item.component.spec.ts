import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMomentItemComponent } from './enterprise-moment-item.component';

describe('EnterpriseMomentItemComponent', () => {
  let component: EnterpriseMomentItemComponent;
  let fixture: ComponentFixture<EnterpriseMomentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseMomentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseMomentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
