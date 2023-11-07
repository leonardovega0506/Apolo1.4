import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReciboComponent } from './dashboard-recibo.component';

describe('DashboardReciboComponent', () => {
  let component: DashboardReciboComponent;
  let fixture: ComponentFixture<DashboardReciboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardReciboComponent]
    });
    fixture = TestBed.createComponent(DashboardReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
