import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaItemAdminComponent } from './views/admin/lista-item-admin/lista-item-admin.component';
import { DetalleItemAdminComponent } from './views/admin/detalle-item-admin/detalle-item-admin.component';
import { AgregarItemAdminComponent } from './views/admin/agregar-item-admin/agregar-item-admin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'item',component:ListaItemAdminComponent},
    {path:'item/crear',component:AgregarItemAdminComponent},
    {path:'item/:id',component:DetalleItemAdminComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
