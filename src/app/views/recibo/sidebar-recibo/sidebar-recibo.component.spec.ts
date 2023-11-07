import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarReciboComponent } from './sidebar-recibo.component';

describe('SidebarReciboComponent', () => {
  let component: SidebarReciboComponent;
  let fixture: ComponentFixture<SidebarReciboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarReciboComponent]
    });
    fixture = TestBed.createComponent(SidebarReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
