import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTicketsFilterComponent } from './stats-tickets-filter.component';

describe('StatsTicketsFilterComponent', () => {
  let component: StatsTicketsFilterComponent;
  let fixture: ComponentFixture<StatsTicketsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTicketsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTicketsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
