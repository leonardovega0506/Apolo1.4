import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemReciboComponent } from './lista-item-recibo.component';

describe('ListaItemReciboComponent', () => {
  let component: ListaItemReciboComponent;
  let fixture: ComponentFixture<ListaItemReciboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemReciboComponent]
    });
    fixture = TestBed.createComponent(ListaItemReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
