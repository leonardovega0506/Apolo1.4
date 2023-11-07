import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemFotoComponent } from './lista-item-foto.component';

describe('ListaItemFotoComponent', () => {
  let component: ListaItemFotoComponent;
  let fixture: ComponentFixture<ListaItemFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemFotoComponent]
    });
    fixture = TestBed.createComponent(ListaItemFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
