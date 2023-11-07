import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenComprasComponent } from './detalle-orden-compras.component';

describe('DetalleOrdenComprasComponent', () => {
  let component: DetalleOrdenComprasComponent;
  let fixture: ComponentFixture<DetalleOrdenComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenComprasComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
