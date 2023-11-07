import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroReciboComponent } from './lista-registro-recibo.component';

describe('ListaRegistroReciboComponent', () => {
  let component: ListaRegistroReciboComponent;
  let fixture: ComponentFixture<ListaRegistroReciboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroReciboComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
