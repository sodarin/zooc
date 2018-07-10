import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFacultyComponent } from './enterprise-faculty.component';

describe('EnterpriseFacultyComponent', () => {
  let component: EnterpriseFacultyComponent;
  let fixture: ComponentFixture<EnterpriseFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
