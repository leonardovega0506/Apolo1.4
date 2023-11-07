import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenFotoComponent } from './lista-orden-foto.component';

describe('ListaOrdenFotoComponent', () => {
  let component: ListaOrdenFotoComponent;
  let fixture: ComponentFixture<ListaOrdenFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenFotoComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
