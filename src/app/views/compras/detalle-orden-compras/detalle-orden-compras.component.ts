import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, catchError } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-orden-compras',
  templateUrl: './detalle-orden-compras.component.html',
  styleUrls: ['./detalle-orden-compras.component.css']
})
export class DetalleOrdenComprasComponent {
      //Atributos
      idOrden = 0;
      cadenaImg: string;
      orden?: any;
      docNum
      itemTraido?: any;
      errorMsg?: any;
      asignacion: boolean = false;
      listaDetalles=[];
      tabla = false;
      botonTabla = true;
    
      //Constructor
      constructor(private andService: AndService, private aRoute: ActivatedRoute, private router: Router, private modal: NgbModal) { }
    
      //inicio del componente
      ngOnInit(): void {
        this.idOrden = this.aRoute.snapshot.params['id'];
        this.andService.obtenerOrdenById(this.idOrden).subscribe(
          (data) => {
            if (data != null) {
              this.orden = data;
            }
            else {
              this.openVentanaCrear(data);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    
      }
    
      //Abrir ventana modal para asignar orden
        open(contenido) {
          this.modal.open(contenido, { centered: true });
        }
    
      //Abrir ventana modal para crear Orden
      openVentanaCrear(crear) {
        this.modal.open(crear, { centered: true });
      }
    
      //Abrir ventana Modal para buscar Orden
      openBuscarOrden(buscarOrden) {
        this.modal.open(buscarOrden, { centered: true });
      }
  
      //Metodo para abrir el div del detalle de la orden
      asignarProductos() {
        this.asignacion = true;
      }
      
      traerDetallesOrden(){
  
          Swal.fire({
            title: 'Obteniendo Detalles',
            didOpen: () => {
              Swal.showLoading()
            },
          });
          from(
            this.andService.obtenerDetallesOrden(this.idOrden)
          )
          .pipe(catchError((error)=>
          {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error al asignar la orden' + error,
              timer: 2000,
            });
            throw error;
          })).subscribe((data:any)=>
          {
            Swal.close();
            if (data != null) {
              Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Exito al asignar la orden',
                timer: 2000,
              });
              this.listaDetalles = data;
              console.log(data);
              this.tabla = true;
              this.botonTabla = false;
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al asignar la orden',
                timer: 2000,
              });
            }
            this.ngOnInit();
          });
  
        }
      
      //Metodo para asignar una orden desde SAP
      asignarOrden() {
        if(this.docNum == ""){
          Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Por favor escribe el numero de la orden a asignar',
            timer: 2000,
          });
        }
        Swal.fire({
          icon: 'question',
          title: "Asignar Orden",
          text: "¿Desea asignar la orden?",
          showCancelButton: true,
          confirmButtonColor: '#3CC3C8',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Asignar',
          cancelButtonText: 'Cancelar'
        }).then(
          (e) => {
            if (e.isConfirmed) 
            {
              Swal.fire({
                title: 'Buscando',
                didOpen: () => {
                  Swal.showLoading()
                },
              });
              from(
                this.andService.asignarOrden(this.docNum,this.idOrden)
              )
              .pipe(catchError((error)=>
              {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error al asignar la orden' + error,
                  timer: 2000,
                });
                throw error;
              })).subscribe((data)=>
              {
                Swal.close();
                if (data != null) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Exito',
                    text: 'Exito al asignar la orden',
                    timer: 2000,
                  });
                  this.ngOnInit();
                  this.modal.dismissAll();
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al asignar la orden',
                    timer: 2000,
                  });
                }
                this.ngOnInit();
              });
            }
          }
        )
      }
    
      //Metodo para regresar al listado de ordenes
      regresar() {
        this.router.navigate(['admin/ordenes']);
      }
}
