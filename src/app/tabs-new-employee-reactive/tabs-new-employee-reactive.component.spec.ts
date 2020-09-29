import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNewEmployeeReactiveComponent } from './tabs-new-employee-reactive.component';

describe('TabsNewEmployeeReactiveComponent', () => {
  let component: TabsNewEmployeeReactiveComponent;
  let fixture: ComponentFixture<TabsNewEmployeeReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsNewEmployeeReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNewEmployeeReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
