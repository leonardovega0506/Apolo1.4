import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroAlmacenComponent } from './lista-registro-almacen.component';

describe('ListaRegistroAlmacenComponent', () => {
  let component: ListaRegistroAlmacenComponent;
  let fixture: ComponentFixture<ListaRegistroAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroAlmacenComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
