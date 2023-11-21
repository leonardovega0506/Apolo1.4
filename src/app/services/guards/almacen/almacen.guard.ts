import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../api-login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AlmacenGuard implements CanActivate {
  //Constructor
  constructor(private login: LoginService, private router: Router) { }


  //Metodo del guard Administrador
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Verificacion
    if (this.login.isLoggedIn() && this.login.getUserRoles() == 'ROLE_ALMACEN') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}