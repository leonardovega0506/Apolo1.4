import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroFotoComponent } from './lista-registro-foto.component';

describe('ListaRegistroFotoComponent', () => {
  let component: ListaRegistroFotoComponent;
  let fixture: ComponentFixture<ListaRegistroFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroFotoComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
