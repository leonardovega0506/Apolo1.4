import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemAlmacenComponent } from './lista-item-almacen.component';

describe('ListaItemAlmacenComponent', () => {
  let component: ListaItemAlmacenComponent;
  let fixture: ComponentFixture<ListaItemAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemAlmacenComponent]
    });
    fixture = TestBed.createComponent(ListaItemAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
