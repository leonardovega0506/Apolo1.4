import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemAdminComponent } from './lista-item-admin.component';

describe('ListaItemAdminComponent', () => {
  let component: ListaItemAdminComponent;
  let fixture: ComponentFixture<ListaItemAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemAdminComponent]
    });
    fixture = TestBed.createComponent(ListaItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
