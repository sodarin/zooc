import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialListComponent } from './trial-list.component';

describe('FreeTrialsComponent', () => {
  let component: TrialListComponent;
  let fixture: ComponentFixture<TrialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
