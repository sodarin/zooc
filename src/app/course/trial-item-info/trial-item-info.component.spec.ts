import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialItemInfoComponent } from './trial-item-info.component';

describe('TrialItemInfoComponent', () => {
  let component: TrialItemInfoComponent;
  let fixture: ComponentFixture<TrialItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
