import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFotoComponent } from './sidebar-foto.component';

describe('SidebarFotoComponent', () => {
  let component: SidebarFotoComponent;
  let fixture: ComponentFixture<SidebarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarFotoComponent]
    });
    fixture = TestBed.createComponent(SidebarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
