import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {
  showWelcomeMessage: boolean = true;
  sidebarActive: boolean = false;
  welcomeMessage='';
  isHomePage: boolean = false;
}
