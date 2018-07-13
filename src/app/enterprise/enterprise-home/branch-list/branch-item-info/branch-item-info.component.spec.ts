import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchItemInfoComponent } from './branch-item-info.component';

describe('BranchItemInfoComponent', () => {
  let component: BranchItemInfoComponent;
  let fixture: ComponentFixture<BranchItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
