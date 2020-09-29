import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOperatorsComponent } from './admin-operators.component';

describe('AdminOperatorsComponent', () => {
  let component: AdminOperatorsComponent;
  let fixture: ComponentFixture<AdminOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
