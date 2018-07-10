import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialsComponent } from './free-trials.component';

describe('FreeTrialsComponent', () => {
  let component: FreeTrialsComponent;
  let fixture: ComponentFixture<FreeTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
