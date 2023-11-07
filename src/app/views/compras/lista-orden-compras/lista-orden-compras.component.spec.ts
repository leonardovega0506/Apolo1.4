import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenComprasComponent } from './lista-orden-compras.component';

describe('ListaOrdenComprasComponent', () => {
  let component: ListaOrdenComprasComponent;
  let fixture: ComponentFixture<ListaOrdenComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenComprasComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
