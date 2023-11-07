import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleItemFotoComponent } from './detalle-item-foto.component';

describe('DetalleItemFotoComponent', () => {
  let component: DetalleItemFotoComponent;
  let fixture: ComponentFixture<DetalleItemFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleItemFotoComponent]
    });
    fixture = TestBed.createComponent(DetalleItemFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
