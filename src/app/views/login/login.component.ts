import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, from } from 'rxjs';
import { LoginService } from 'src/app/services/api-login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    //Variables para el form del Login
    loginForm = {
      "username": '',
      "password": ''
    }
    //Constructor
    constructor(private login: LoginService, private router: Router ) { }
  
    ngOnInit(): void {}
  
    //Metodo para ingresar al dashboard corresponiente
    loginSubmit() {

      //Verifiacion de espacios en blanco
      if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Asegurate de escribir el usuario',
          timer: 2000,
          showConfirmButton: false,
        });
      }

      //Verificacion de espacios en blanco
      if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
        //Swal.fire('Error','Asegurate de poner la contraseña al ingresar','error');
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Asegurate de escribir la contraseña',
          timer: 2000,
          showConfirmButton: false,
        });
        return;
      }
      //Conexion al service login
      Swal.fire({
        title: 'Ingresando',
        didOpen: () => {
          Swal.showLoading()
        },
      });
      //Obtener errores a partir de form
      from(
        this.login.loginToken(this.loginForm)
      ).pipe(catchError((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al traer el articulo',
          timer: 2000,
        });
        throw error;
      })).subscribe((data:any) => {
        Swal.close();
        if (data != null) {
          
          Swal.fire({
            icon: 'success',
            title: 'Exito',
            timer: 2000,
          });

          //Buscar los roles del usuario
          this.login.loginUser(data.token);
          this.login.getCurrentUser().subscribe(
            (user: any) => {
              this.login.setUser(user);
              //Verificacion de Roles
              if (this.login.getUserRoles() == "ROLE_ADMIN") {
                this.router.navigate(['admin']);
              }
              else if (this.login.getUserRoles() == 'ROLE_ALMACEN') {
                this.router.navigate(['almacen']);
              }
              else if (this.login.getUserRoles() == 'ROLE_COMPRAS') {
                this.router.navigate(['compras']);
              }
              else if (this.login.getUserRoles() == 'ROLE_FOTO') {
                this.router.navigate(['foto']);
              }
              else if (this.login.getUserRoles() == "ROLE_RECIBO") {
                this.router.navigate(['recibo']);
              }
              else{
                this.login.logout();
              }
            }
          );
          
        //Error si no encuentra data
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al traer el articulo',
            timer: 2000,
          });
        }
        this.ngOnInit();
      });
    }
  }
      
