import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMomentCommentItemComponent } from './enterprise-moment-comment-item.component';

describe('EnterpriseMomentCommentItemComponent', () => {
  let component: EnterpriseMomentCommentItemComponent;
  let fixture: ComponentFixture<EnterpriseMomentCommentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseMomentCommentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseMomentCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
