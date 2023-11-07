import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemReciboComponent } from './detalle-item-recibo.component';

describe('DetalleItemReciboComponent', () => {
  let component: DetalleItemReciboComponent;
  let fixture: ComponentFixture<DetalleItemReciboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleItemReciboComponent]
    });
    fixture = TestBed.createComponent(DetalleItemReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
