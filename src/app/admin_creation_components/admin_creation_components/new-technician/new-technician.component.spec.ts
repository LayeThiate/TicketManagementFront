import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechnicianComponent } from './new-technician.component';

describe('NewTechnicianComponent', () => {
  let component: NewTechnicianComponent;
  let fixture: ComponentFixture<NewTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
