import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansFilterComponent } from './technicians-filter.component';

describe('TechniciansFilterComponent', () => {
  let component: TechniciansFilterComponent;
  let fixture: ComponentFixture<TechniciansFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniciansFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniciansFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
