import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPersonDetailsComponent } from './ticket-person-details.component';

describe('TicketPersonDetailsComponent', () => {
  let component: TicketPersonDetailsComponent;
  let fixture: ComponentFixture<TicketPersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
