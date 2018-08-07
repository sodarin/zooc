import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzzzAvatarComponent } from './zzzz-avatar.component';

describe('ZzzzAvatarComponent', () => {
  let component: ZzzzAvatarComponent;
  let fixture: ComponentFixture<ZzzzAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZzzzAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzzzAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
