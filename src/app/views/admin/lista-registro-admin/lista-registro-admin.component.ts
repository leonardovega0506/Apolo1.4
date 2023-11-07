import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-lista-registro-admin',
  templateUrl: './lista-registro-admin.component.html',
  styleUrls: ['./lista-registro-admin.component.css']
})
export class ListaRegistroAdminComponent {


  //Atributos
  registros: any = [];
  verificacion: boolean = false;
  numeroEntrada?: any = 0;
  proveedor?: any = "";
  cuadrante = "";
  especial: boolean = false;
  page: number = 0;
  boton = true;
  botonprev = false;

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del componente
  ngOnInit(): void {
    console.log(this.page);
    this.rellenarRegistros(this.page);
  }
  nextPage() {
    this.page += 1;
    this.botonprev = true;
    this.rellenarRegistros(this.page);
  }
  prevPage() {
    this.page -= 1;
    if (this.page == 0) {
      this.botonprev = false;
      this.boton = true;
      this.rellenarRegistros(this.page);
    }
    else {
      this.boton = true;
      this.rellenarRegistros(this.page);
    }
  }

  rellenarRegistros(pagina: number): void {
    this.andService.listarRegistros(pagina,"10","idRegistro","asc","").subscribe(
      (datos: any) => {
          this.registros = datos.content;
          console.log(datos);
          this.boton = false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Abrir Ventana Modal
  open(contenido) {
    this.modal.open(contenido, { centered: true });
  }
  showData() {
    this.verificacion = true;
  }

  hideData() {
    this.verificacion = false;

  }

  checarTipo() {
    if (this.verificacion == true) {
      this.checarPedidoEspecial();
    }
    else {
      //this.generarRegistroProveedor();
    }
  }

  checarPedidoEspecial() {
    if (this.especial == true) {

    }
    else {
      this.generarRegistroOrden();
    }
  }



  //Metodo para agregar un registro del tiempo
  generarRegistroOrden() {
    /*Swal.fire({
      icon: 'question',
      title: "Crear Registro",
      text: "¿Desea Crear el registro?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {*/
          this.andService.crearRegistro(this.numeroEntrada,this.cuadrante).subscribe(
            (data: any) => {
              //Swal.fire("Registros", "Registro creado con exito", "success").then(
                (e) => {
                  this.ngOnInit();
                  this.modal.dismissAll();
                }
              //);
            },
            (error) => {
              //Swal.fire("Error", "No se ha podido crear el registro", "error")
              console.log(error);
            }
          );
        }
      //});
  //}
  /*generarRegistroProveedor() {
    /*Swal.fire({
      icon: 'question',
      title: "Crear Registro",
      text: "¿Desea Crear el Registro?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.modal.dismissAll();
          this.andService.crearRegistroProveedor(this.proveedor, this.cuadrante).subscribe(
            (data: any) => {
              console.log(this.cuadrante);
              //Swal.fire("Registros", "Registro creado con exito", "success").then(
                (e) => {
                  this.ngOnInit();
                  this.modal.dismissAll();
                }
              //);
            },
            (error) => {
              //Swal.fire("Error", "No se ha podido crear el registro", "error")
              console.log(error);
            }
          );
        //}
      //});
  }*/
}
