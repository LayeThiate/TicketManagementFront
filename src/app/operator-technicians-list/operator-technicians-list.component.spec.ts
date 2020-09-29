import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTechniciansListComponent } from './operator-technicians-list.component';

describe('OperatorTechniciansListComponent', () => {
  let component: OperatorTechniciansListComponent;
  let fixture: ComponentFixture<OperatorTechniciansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorTechniciansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorTechniciansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
