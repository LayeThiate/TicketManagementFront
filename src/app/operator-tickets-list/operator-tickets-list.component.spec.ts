import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTicketsListComponent } from './operator-tickets-list.component';

describe('OperatorTicketsListComponent', () => {
  let component: OperatorTicketsListComponent;
  let fixture: ComponentFixture<OperatorTicketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorTicketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorTicketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
