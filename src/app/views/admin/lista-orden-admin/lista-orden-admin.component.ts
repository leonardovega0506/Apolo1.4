import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-lista-orden-admin',
  templateUrl: './lista-orden-admin.component.html',
  styleUrls: ['./lista-orden-admin.component.css']
})
export class ListaOrdenAdminComponent {
  //Atributos
  ordenes: any = [];
  ordenData = {
    docNum: '',
    docDate: '',
    docTime: '',
    docTotal: '',
    cardName: '',
    docEntry: ''
  }
  orden?: any;
  page:number=0;
  botonprev=true;
  boton=true;

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del Sistema
  ngOnInit(): void {
    this.rellenarOrdenes(this.page);
  }
  nextPage(){ 
    this.page += 1;
    this.botonprev=true;
    this.rellenarOrdenes(this.page);
  }
  prevPage(){
    this.page-=1;
    if(this.page==0){
      this.botonprev = false;
      this.boton=true;
      this.rellenarOrdenes(this.page);
    }
    else{
      this.boton=true;
      this.rellenarOrdenes(this.page);
    }
  }
  rellenarOrdenes(pagina:number){
    this.andService.listaOrdenes(pagina,"10","idOrdenCompra","asc").subscribe(
      (data:any) => {
        this.ordenes = data.content;
        console.log(data);
        this.boton = false;

      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Metodo para buscar orden por numero de Entrada
  buscarOrder() {
    /*Swal.fire({
      icon: 'question',
      title: "Buscar Orden",
      text: "¿Desea Buscar la Orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {*/
          this.andService.obtenerOrdenByDocNum(this.ordenData.docEntry).subscribe(
            (data: any) => {

              //Swal.fire('La Orden fue traida correctamente', 'success');
              this.orden = data;
              this.modal.dismissAll();
              this.ngOnInit();
            },
            (error) => {
              //Swal.fire("Error", "Error al bucsar la orden", "error");
            }
          )//Cerrar subscribe 
        }//Cerra If
      //});//Cerrar then

  //}

  //Metodo para abrir la ventana modal de crear orden
  openCreateOrder(ordenNueva) {
    this.modal.open(ordenNueva, { size: 'lg' });
  }
  //Metodo para abrir la ventana modal de buscar una orden
  openBuscarOrder(buscarOrden) {
    this.modal.open(buscarOrden, { size: 'sm' });
  }

  //Metodo para mandar la ruta de detalles
  detallesOr(id?: any) {
    this.router.navigate(['/admin/asignarProducto/', id]);
    console.log(id);
  }
}
