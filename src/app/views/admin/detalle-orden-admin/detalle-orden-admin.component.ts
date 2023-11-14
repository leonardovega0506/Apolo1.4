import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-orden-admin',
  templateUrl: './detalle-orden-admin.component.html',
  styleUrls: ['./detalle-orden-admin.component.css']
})
export class DetalleOrdenAdminComponent {
    //Atributos
    idOrden = 0;
    cadenaImg: string;
    orden: any;
    ordenData = {
      docNum: '',
      docDate: '',
      docTime: '',
      docTotal: '',
      cardName: '',
      docEntry: ''
    }
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
      this.andService.obtenerDetallesOrden(this.idOrden).subscribe(
        (data:any)=>{
            this.listaDetalles = data;
            console.log(data);
            this.tabla = true;
            this.botonTabla = false;
        },
        (error)=>{
            console.log(error);
        }
      )
      }
    
    //Metodo para asignar una orden desde SAP
    asignarOrden() {
      if(this.ordenData.docNum == ""){
        //Swal.fire("Error","Por favor verifica haber escrito algo","warning");
      }
      /*Swal.fire({
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
          if (e.isConfirmed) {*/
            this.andService.asignarOrden(this.ordenData.docEntry, this.idOrden).subscribe(
              (data) => {
                this.ngOnInit();
                this.modal.dismissAll();
                this.andService.andStatus.next(true);
                //Swal.fire("Asignacion","Exito al asignar la orden","success");
              },
              (error) => {
                //Swal.fire('Error',"Error al bucsar orden","error");
              }
            );
          }
        //}
      //)
  
    //}
  
    //Metodo para regresar al listado de ordenes
    regresar() {
      this.router.navigate(['admin/ordenes']);
    }
}
