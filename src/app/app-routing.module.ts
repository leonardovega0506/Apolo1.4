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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'item',component:ListaItemAdminComponent},
    {path:'item/crear',component:AgregarItemAdminComponent},
    {path:'item/:id',component:DetalleItemAdminComponent},
    {path:'orden',component:ListaOrdenAdminComponent},
    {path:'orden/:id',component:DetalleOrdenAdminComponent},
    {path:'registro',component:ListaRegistroAdminComponent},
    {path:'registro/:id',component:DetalleRegistrosAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
