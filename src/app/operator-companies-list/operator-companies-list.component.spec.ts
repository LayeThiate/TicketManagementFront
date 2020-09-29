import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCompaniesListComponent } from './operator-companies-list.component';

describe('OperatorCompaniesListComponent', () => {
  let component: OperatorCompaniesListComponent;
  let fixture: ComponentFixture<OperatorCompaniesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorCompaniesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
