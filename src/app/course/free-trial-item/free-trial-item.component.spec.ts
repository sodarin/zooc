import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialItemComponent } from './free-trial-item.component';

describe('FreeTrialItemComponent', () => {
  let component: FreeTrialItemComponent;
  let fixture: ComponentFixture<FreeTrialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
