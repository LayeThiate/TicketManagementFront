import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCompaniesComponent } from './stats-companies.component';

describe('StatsCompaniesComponent', () => {
  let component: StatsCompaniesComponent;
  let fixture: ComponentFixture<StatsCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
