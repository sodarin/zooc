import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFullMomentCommentComponent } from './enterprise-full-moment-comment.component';

describe('EnterpriseFullMomentCommentComponent', () => {
  let component: EnterpriseFullMomentCommentComponent;
  let fixture: ComponentFixture<EnterpriseFullMomentCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseFullMomentCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFullMomentCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
