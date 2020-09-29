import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsFilterComponent } from './operators-filter.component';

describe('OperatorsFilterComponent', () => {
  let component: OperatorsFilterComponent;
  let fixture: ComponentFixture<OperatorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
