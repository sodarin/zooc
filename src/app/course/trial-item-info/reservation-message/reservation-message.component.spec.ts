import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMessageComponent } from './reservation-message.component';

describe('ReservationMessageComponent', () => {
  let component: ReservationMessageComponent;
  let fixture: ComponentFixture<ReservationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
