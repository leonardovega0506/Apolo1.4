import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComprasComponent } from './dashboard-compras.component';

describe('DashboardComprasComponent', () => {
  let component: DashboardComprasComponent;
  let fixture: ComponentFixture<DashboardComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComprasComponent]
    });
    fixture = TestBed.createComponent(DashboardComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
