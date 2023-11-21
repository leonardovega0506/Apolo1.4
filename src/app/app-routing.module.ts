import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaItemAdminComponent } from './views/admin/lista-item-admin/lista-item-admin.component';
import { DetalleItemAdminComponent } from './views/admin/detalle-item-admin/detalle-item-admin.component';
import { AgregarItemAdminComponent } from './views/admin/agregar-item-admin/agregar-item-admin.component';
import { ListaOrdenAdminComponent } from './views/admin/lista-orden-admin/lista-orden-admin.component';
import { DetalleOrdenAdminComponent } from './views/admin/detalle-orden-admin/detalle-orden-admin.component';
import { ListaRegistroAdminComponent } from './views/admin/lista-registro-admin/lista-registro-admin.component';
import { DetalleRegistrosAdminComponent } from './views/admin/detalle-registros-admin/detalle-registros-admin.component';
import { StatsAdminComponent } from './views/admin/stats-admin/stats-admin.component';
import { ListaUsuarioAdminComponent } from './views/admin/lista-usuario-admin/lista-usuario-admin.component';
import { DashboardAlmacenComponent } from './views/almacen/dashboard-almacen/dashboard-almacen.component';
import { ListaItemAlmacenComponent } from './views/almacen/lista-item-almacen/lista-item-almacen.component';
import { ListaRegistroAlmacenComponent } from './views/almacen/lista-registro-almacen/lista-registro-almacen.component';
import { DetalleItemAlmacenComponent } from './views/almacen/detalle-item-almacen/detalle-item-almacen.component';
import { DashboardComprasComponent } from './views/compras/dashboard-compras/dashboard-compras.component';
import { ListaItemComprasComponent } from './views/compras/lista-item-compras/lista-item-compras.component';
import { DetalleItemComprasComponent } from './views/compras/detalle-item-compras/detalle-item-compras.component';
import { AgregarItemComprasComponent } from './views/compras/agregar-item-compras/agregar-item-compras.component';
import { ListaOrdenComprasComponent } from './views/compras/lista-orden-compras/lista-orden-compras.component';
import { DetalleOrdenComprasComponent } from './views/compras/detalle-orden-compras/detalle-orden-compras.component';
import { ListaRegistroComprasComponent } from './views/compras/lista-registro-compras/lista-registro-compras.component';
import { DashboardFotoComponent } from './views/foto/dashboard-foto/dashboard-foto.component';
import { ListaItemFotoComponent } from './views/foto/lista-item-foto/lista-item-foto.component';
import { DetalleItemFotoComponent } from './views/foto/detalle-item-foto/detalle-item-foto.component';
import { ListaOrdenFotoComponent } from './views/foto/lista-orden-foto/lista-orden-foto.component';
import { DetalleOrdenFotoComponent } from './views/foto/detalle-orden-foto/detalle-orden-foto.component';
import { ListaRegistroFotoComponent } from './views/foto/lista-registro-foto/lista-registro-foto.component';
import { DashboardReciboComponent } from './views/recibo/dashboard-recibo/dashboard-recibo.component';
import { ListaItemReciboComponent } from './views/recibo/lista-item-recibo/lista-item-recibo.component';
import { DetalleItemReciboComponent } from './views/recibo/detalle-item-recibo/detalle-item-recibo.component';
import { ListaRegistroReciboComponent } from './views/recibo/lista-registro-recibo/lista-registro-recibo.component';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { AlmacenGuard } from './services/guards/almacen/almacen.guard';
import { ComprasGuard } from './services/guards/compras/compras.guard';
import { FotoGuard } from './services/guards/foto/foto.guard';
import { ReciboGuard } from './services/guards/recibo/recibo.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardAdminComponent,canActivate:[AdminGuard],children:[
    {path:'item',component:ListaItemAdminComponent},
    {path:'item/crear',component:AgregarItemAdminComponent},
    {path:'item/:id',component:DetalleItemAdminComponent},
    {path:'orden',component:ListaOrdenAdminComponent},
    {path:'orden/:id',component:DetalleOrdenAdminComponent},
    {path:'registro',component:ListaRegistroAdminComponent},
    {path:'registro/:id',component:DetalleRegistrosAdminComponent},
    {path:'stats',component:StatsAdminComponent},
    {path:'usuario',component:ListaUsuarioAdminComponent}
  ]},
  {path:'almacen',component:DashboardAlmacenComponent,canActivate:[AlmacenGuard],children:[
    {path:'item',component:ListaItemAlmacenComponent},
    {path:'item/:id',component:DetalleItemAlmacenComponent},
    {path:'registro',component:ListaRegistroAlmacenComponent}
  ]},
  {path:'compras',component:DashboardComprasComponent,canActivate:[ComprasGuard],children:[
    {path:'item',component:ListaItemComprasComponent},
    {path:'item/:id',component:DetalleItemComprasComponent},
    {path:'item/crear',component:AgregarItemComprasComponent},
    {path:'orden',component:ListaOrdenComprasComponent},
    {path:'orden/:id',component:DetalleOrdenComprasComponent},
    {path:'registro',component:ListaRegistroComprasComponent}
  ]},
  {path:'foto',component:DashboardFotoComponent,canActivate:[FotoGuard],children:[
    {path:'item',component:ListaItemFotoComponent},
    {path:'item/:id',component:DetalleItemFotoComponent},
    {path:'orden',component:ListaOrdenFotoComponent},
    {path:'orden/:id',component:DetalleOrdenFotoComponent},
    {path:'registro',component:ListaRegistroFotoComponent}
  ]},
  {path:'recibo',component:DashboardReciboComponent,canActivate:[ReciboGuard],children:[
    {path:'item',component:ListaItemReciboComponent},
    {path:'item/:id',component:DetalleItemReciboComponent},
    {path:'registro',component:ListaRegistroReciboComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
