import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistrosAdminComponent } from './detalle-registros-admin.component';

describe('DetalleRegistrosAdminComponent', () => {
  let component: DetalleRegistrosAdminComponent;
  let fixture: ComponentFixture<DetalleRegistrosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleRegistrosAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleRegistrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
