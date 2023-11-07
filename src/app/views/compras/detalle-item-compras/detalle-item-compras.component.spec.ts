import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemComprasComponent } from './detalle-item-compras.component';

describe('DetalleItemComprasComponent', () => {
  let component: DetalleItemComprasComponent;
  let fixture: ComponentFixture<DetalleItemComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleItemComprasComponent]
    });
    fixture = TestBed.createComponent(DetalleItemComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
