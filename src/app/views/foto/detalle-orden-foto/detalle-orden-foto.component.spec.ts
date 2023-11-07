import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenFotoComponent } from './detalle-orden-foto.component';

describe('DetalleOrdenFotoComponent', () => {
  let component: DetalleOrdenFotoComponent;
  let fixture: ComponentFixture<DetalleOrdenFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenFotoComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
