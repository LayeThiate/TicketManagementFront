import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianAccountComponent } from './technician-account.component';

describe('TechnicianAccountComponent', () => {
  let component: TechnicianAccountComponent;
  let fixture: ComponentFixture<TechnicianAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
