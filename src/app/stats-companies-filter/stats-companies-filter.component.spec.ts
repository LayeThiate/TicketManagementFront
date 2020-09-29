import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCompaniesFilterComponent } from './stats-companies-filter.component';

describe('StatsCompaniesFilterComponent', () => {
  let component: StatsCompaniesFilterComponent;
  let fixture: ComponentFixture<StatsCompaniesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCompaniesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCompaniesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
