import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMomentComponent } from './enterprise-moment.component';

describe('EnterpriseMomentComponent', () => {
  let component: EnterpriseMomentComponent;
  let fixture: ComponentFixture<EnterpriseMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
