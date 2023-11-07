import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemAlmacenComponent } from './detalle-item-almacen.component';

describe('DetalleItemAlmacenComponent', () => {
  let component: DetalleItemAlmacenComponent;
  let fixture: ComponentFixture<DetalleItemAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleItemAlmacenComponent]
    });
    fixture = TestBed.createComponent(DetalleItemAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
