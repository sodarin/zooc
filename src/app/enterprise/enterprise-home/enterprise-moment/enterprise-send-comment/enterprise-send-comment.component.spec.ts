import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSendCommentComponent } from './enterprise-send-comment.component';

describe('EnterpriseSendCommentComponent', () => {
  let component: EnterpriseSendCommentComponent;
  let fixture: ComponentFixture<EnterpriseSendCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSendCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSendCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
