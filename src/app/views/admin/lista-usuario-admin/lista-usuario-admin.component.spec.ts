import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarioAdminComponent } from './lista-usuario-admin.component';

describe('ListaUsuarioAdminComponent', () => {
  let component: ListaUsuarioAdminComponent;
  let fixture: ComponentFixture<ListaUsuarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaUsuarioAdminComponent]
    });
    fixture = TestBed.createComponent(ListaUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
