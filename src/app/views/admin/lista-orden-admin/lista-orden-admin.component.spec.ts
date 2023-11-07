import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenAdminComponent } from './lista-orden-admin.component';

describe('ListaOrdenAdminComponent', () => {
  let component: ListaOrdenAdminComponent;
  let fixture: ComponentFixture<ListaOrdenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenAdminComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
