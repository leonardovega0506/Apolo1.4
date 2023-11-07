import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComprasComponent } from './sidebar-compras.component';

describe('SidebarComprasComponent', () => {
  let component: SidebarComprasComponent;
  let fixture: ComponentFixture<SidebarComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComprasComponent]
    });
    fixture = TestBed.createComponent(SidebarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
