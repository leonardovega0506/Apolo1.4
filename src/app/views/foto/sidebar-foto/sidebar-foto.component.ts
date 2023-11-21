import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/services/api-login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-foto',
  templateUrl: './sidebar-foto.component.html',
  styleUrls: ['./sidebar-foto.component.css']
})
export class SidebarFotoComponent {
  showWelcomeMessage: boolean = true;
  sidebarActive: boolean = false;
  welcomeMessage = '';
  isHomePage: boolean = false;
  usuarioParseado:any;
  usuario:any;

  //Constructor
  constructor(public login: LoginService, private router: Router) { 
    this.setWelcomeMessage();
    this.usuarioParseado=JSON.parse(localStorage.getItem('user'));
    this.usuario = this.usuarioParseado.nombre;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage(event.urlAfterRedirects);
      }
    });

  }

  //Metodo para cerrar sesion
  logout() {
    Swal.fire({
      icon: 'question',
      title: "Salir",
      text: "¿Desea Salir de la aplicacion?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
    this.login.logout();
    this.router.navigate(["/"]);
  }
  });
}

  //Establezco el mensaje de bienvenida
  setWelcomeMessage() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      this.welcomeMessage = '¡Buenos días!';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.welcomeMessage = '¡Buenas tardes!';
    } else {
      this.welcomeMessage = '¡Buenas noches!';
    }
  }

  checkIfHomePage(currentUrl:string) {
    this.isHomePage = currentUrl.endsWith('/foto'); 
  }
}
