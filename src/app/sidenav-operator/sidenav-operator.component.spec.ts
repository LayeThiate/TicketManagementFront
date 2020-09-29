import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOperatorComponent } from './sidenav-operator.component';

describe('SidenavOperatorComponent', () => {
  let component: SidenavOperatorComponent;
  let fixture: ComponentFixture<SidenavOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
