import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroComprasComponent } from './lista-registro-compras.component';

describe('ListaRegistroComprasComponent', () => {
  let component: ListaRegistroComprasComponent;
  let fixture: ComponentFixture<ListaRegistroComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroComprasComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
