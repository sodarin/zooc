import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialListComponent } from './free-trial-list.component';

describe('FreeTrialsComponent', () => {
  let component: FreeTrialListComponent;
  let fixture: ComponentFixture<FreeTrialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
