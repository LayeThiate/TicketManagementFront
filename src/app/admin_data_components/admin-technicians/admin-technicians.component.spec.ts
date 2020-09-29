import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTechniciansComponent } from './admin-technicians.component';

describe('AdminTechniciansComponent', () => {
  let component: AdminTechniciansComponent;
  let fixture: ComponentFixture<AdminTechniciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTechniciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
