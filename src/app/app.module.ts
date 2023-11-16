import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { DetalleRegistrosAdminComponent } from './views/admin/detalle-registros-admin/detalle-registros-admin.component';
import { DetalleItemAdminComponent } from './views/admin/detalle-item-admin/detalle-item-admin.component';
import { DetalleOrdenAdminComponent } from './views/admin/detalle-orden-admin/detalle-orden-admin.component';
import { ListaItemAdminComponent } from './views/admin/lista-item-admin/lista-item-admin.component';
import { ListaOrdenAdminComponent } from './views/admin/lista-orden-admin/lista-orden-admin.component';
import { ListaRegistroAdminComponent } from './views/admin/lista-registro-admin/lista-registro-admin.component';
import { SidebarAdminComponent } from './views/admin/sidebar-admin/sidebar-admin.component';
import { StatsAdminComponent } from './views/admin/stats-admin/stats-admin.component';
import { ListaUsuarioAdminComponent } from './views/admin/lista-usuario-admin/lista-usuario-admin.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { DetalleItemAlmacenComponent } from './views/almacen/detalle-item-almacen/detalle-item-almacen.component';
import { ListaItemAlmacenComponent } from './views/almacen/lista-item-almacen/lista-item-almacen.component';
import { ListaRegistroAlmacenComponent } from './views/almacen/lista-registro-almacen/lista-registro-almacen.component';
import { SidebarAlmacenComponent } from './views/almacen/sidebar-almacen/sidebar-almacen.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { DetalleItemComprasComponent } from './views/compras/detalle-item-compras/detalle-item-compras.component';
import { DetalleOrdenComprasComponent } from './views/compras/detalle-orden-compras/detalle-orden-compras.component';
import { ListaOrdenComprasComponent } from './views/compras/lista-orden-compras/lista-orden-compras.component';
import { ListaItemComprasComponent } from './views/compras/lista-item-compras/lista-item-compras.component';
import { ListaRegistroComprasComponent } from './views/compras/lista-registro-compras/lista-registro-compras.component';
import { SidebarComprasComponent } from './views/compras/sidebar-compras/sidebar-compras.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { DetalleItemFotoComponent } from './views/foto/detalle-item-foto/detalle-item-foto.component';
import { DetalleOrdenFotoComponent } from './views/foto/detalle-orden-foto/detalle-orden-foto.component';
import { ListaItemFotoComponent } from './views/foto/lista-item-foto/lista-item-foto.component';
import { ListaOrdenFotoComponent } from './views/foto/lista-orden-foto/lista-orden-foto.component';
import { ListaRegistroFotoComponent } from './views/foto/lista-registro-foto/lista-registro-foto.component';
import { SidebarFotoComponent } from './views/foto/sidebar-foto/sidebar-foto.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';
import { DetalleItemReciboComponent } from './views/recibo/detalle-item-recibo/detalle-item-recibo.component';
import { ListaItemReciboComponent } from './views/recibo/lista-item-recibo/lista-item-recibo.component';
import { ListaRegistroReciboComponent } from './views/recibo/lista-registro-recibo/lista-registro-recibo.component';
import { SidebarReciboComponent } from './views/recibo/sidebar-recibo/sidebar-recibo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgregarItemAdminComponent } from './views/admin/agregar-item-admin/agregar-item-admin.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { authInterceptorProviders } from './services/util/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    DetalleRegistrosAdminComponent,
    DetalleItemAdminComponent,
    DetalleOrdenAdminComponent,
    ListaItemAdminComponent,
    ListaOrdenAdminComponent,
    ListaRegistroAdminComponent,
    SidebarAdminComponent,
    StatsAdminComponent,
    ListaUsuarioAdminComponent,
    DashboardAlmacenComponent,
    DetalleItemAlmacenComponent,
    ListaItemAlmacenComponent,
    ListaRegistroAlmacenComponent,
    SidebarAlmacenComponent,
    DashboardComprasComponent,
    DetalleItemComprasComponent,
    DetalleOrdenComprasComponent,
    ListaOrdenComprasComponent,
    ListaItemComprasComponent,
    ListaRegistroComprasComponent,
    SidebarComprasComponent,
    DashboardFotoComponent,
    DetalleItemFotoComponent,
    DetalleOrdenFotoComponent,
    ListaItemFotoComponent,
    ListaOrdenFotoComponent,
    ListaRegistroFotoComponent,
    SidebarFotoComponent,
    LoginComponent,
    DashboardReciboComponent,
    DetalleItemReciboComponent,
    ListaItemReciboComponent,
    ListaRegistroReciboComponent,
    SidebarReciboComponent,
    AgregarItemAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    authInterceptorProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
