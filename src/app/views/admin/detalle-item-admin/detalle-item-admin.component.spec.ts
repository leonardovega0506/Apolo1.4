import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemAdminComponent } from './detalle-item-admin.component';

describe('DetalleItemAdminComponent', () => {
  let component: DetalleItemAdminComponent;
  let fixture: ComponentFixture<DetalleItemAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleItemAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
