import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAlmacenComponent } from './sidebar-almacen.component';

describe('SidebarAlmacenComponent', () => {
  let component: SidebarAlmacenComponent;
  let fixture: ComponentFixture<SidebarAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarAlmacenComponent]
    });
    fixture = TestBed.createComponent(SidebarAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
