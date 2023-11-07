import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroAdminComponent } from './lista-registro-admin.component';

describe('ListaRegistroAdminComponent', () => {
  let component: ListaRegistroAdminComponent;
  let fixture: ComponentFixture<ListaRegistroAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroAdminComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
