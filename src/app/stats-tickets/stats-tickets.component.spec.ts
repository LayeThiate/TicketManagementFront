import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTicketsComponent } from './stats-tickets.component';

describe('StatsTicketsComponent', () => {
  let component: StatsTicketsComponent;
  let fixture: ComponentFixture<StatsTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
