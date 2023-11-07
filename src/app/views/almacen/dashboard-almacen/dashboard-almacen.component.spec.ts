import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAlmacenComponent } from './dashboard-almacen.component';

describe('DashboardAlmacenComponent', () => {
  let component: DashboardAlmacenComponent;
  let fixture: ComponentFixture<DashboardAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAlmacenComponent]
    });
    fixture = TestBed.createComponent(DashboardAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
