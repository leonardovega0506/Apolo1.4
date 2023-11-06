import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarItemAdminComponent } from './agregar-item-admin.component';

describe('AgregarItemAdminComponent', () => {
  let component: AgregarItemAdminComponent;
  let fixture: ComponentFixture<AgregarItemAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarItemAdminComponent]
    });
    fixture = TestBed.createComponent(AgregarItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
