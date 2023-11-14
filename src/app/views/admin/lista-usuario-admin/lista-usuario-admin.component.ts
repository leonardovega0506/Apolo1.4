import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-lista-usuario-admin',
  templateUrl: './lista-usuario-admin.component.html',
  styleUrls: ['./lista-usuario-admin.component.css']
})
export class ListaUsuarioAdminComponent {
    //Atributos
    users: any = [];
    usuarioData = {
      username: '',
      password: '',
      nombre: '',
      area: '',
    }
  
  
    //Constructor
    constructor(private andService: AndService, private modal: NgbModal) { }
  
    //Inicio del Proyecto
    ngOnInit(): void {
      //Listar Usuarios
      this.andService.listaUsuarios().subscribe(
        (data) => {
          this.users = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
    //Abrir ventana modal para crear un usuario nuevo
    open(usuarioNuevo) {
      this.modal.open(usuarioNuevo, { size: 'lg' });
    }
  
    //Metodo para crear un usuario
    crearUsuario() {
      if (this.usuarioData.nombre == null || this.usuarioData.username == null || this.usuarioData.area == null || this.usuarioData.password == null || this.usuarioData.nombre == "" || this.usuarioData.area == "" || this.usuarioData.password == "" || this.usuarioData.username == "") {
        //Swal.fire("Error", "Por favor complete los campos", "warning");
      }
      else {
        /*Swal.fire({
          icon: 'question',
          title: "Crear Usuario",
          text: "¿Desea Crear un usuario?",
          showCancelButton: true,
          confirmButtonColor: '#3CC3C8',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Crear',
          cancelButtonText: 'Cancelar'
        }).then(
          (e) => {
            if (e.isConfirmed) {*/
              this.andService.crearUsuario(this.usuarioData).subscribe(
                (data) => {
                  this.ngOnInit();
                  this.modal.dismissAll();
                  this.limpiarDatos();
                },
                (error) => {
                  console.log(error);
                }
              );
            }
          }
        //);
      //}
    //}
    limpiarDatos() {
        this.usuarioData.nombre = "";
        this.usuarioData.area = "";
        this.usuarioData.password = "";
        this.usuarioData.username = "";
    }
  
}
