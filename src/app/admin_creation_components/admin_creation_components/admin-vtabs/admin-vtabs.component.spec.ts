import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVtabsComponent } from './admin-vtabs.component';

describe('AdminVtabsComponent', () => {
  let component: AdminVtabsComponent;
  let fixture: ComponentFixture<AdminVtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
