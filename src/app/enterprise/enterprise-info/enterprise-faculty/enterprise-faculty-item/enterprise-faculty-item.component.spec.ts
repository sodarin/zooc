import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFacultyItemComponent } from './enterprise-faculty-item.component';

describe('EnterpriseFacultyItemComponent', () => {
  let component: EnterpriseFacultyItemComponent;
  let fixture: ComponentFixture<EnterpriseFacultyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseFacultyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFacultyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
