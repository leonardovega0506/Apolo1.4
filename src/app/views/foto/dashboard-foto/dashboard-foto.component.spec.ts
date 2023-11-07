import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFotoComponent } from './dashboard-foto.component';

describe('DashboardFotoComponent', () => {
  let component: DashboardFotoComponent;
  let fixture: ComponentFixture<DashboardFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFotoComponent]
    });
    fixture = TestBed.createComponent(DashboardFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
