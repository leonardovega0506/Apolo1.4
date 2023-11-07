import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemComprasComponent } from './lista-item-compras.component';

describe('ListaItemComprasComponent', () => {
  let component: ListaItemComprasComponent;
  let fixture: ComponentFixture<ListaItemComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemComprasComponent]
    });
    fixture = TestBed.createComponent(ListaItemComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
