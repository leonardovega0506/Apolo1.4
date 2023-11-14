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
  lista_ordenes: any = [];
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
  pages:number=0;
  pageActual:number=0;
  currentPage: number = 1;  
  sortDir:boolean = true;
  private columnaOrdenada: string = '';
  cantidad:any=10;
  proveedorNombre:any;


  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  getCurrentDate():Date{
    return new Date();
  }

  //Inicio del Sistema
  ngOnInit(): void {
    this.rellenarOrdenes(this.page,this.cantidad,"idOrdenCompra","asc");


  }
  rellenarOrdenes(pagina:number,cantidad,columna,sort){
    this.andService.listaOrdenes(pagina,cantidad,columna,sort).subscribe(
      (data:any) => {
        this.lista_ordenes = data.content;
        this.pages = data.allPage;
        console.log(data);
        this.boton = false;

      },
      (error) => {
        console.log(error);
      }
    )
  }

  buscarProveedorNombre(){
    console.log(this.proveedorNombre);
    this.andService.listaOrdenesByCardName(this.proveedorNombre).subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_ordenes = data;
      }
    );
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

  
  sortColumn(columna){
    this.rellenarOrdenes(this.currentPage-1,this.cantidad,columna,this.sortDir);
      // Verifica si es la misma columna que se hizo clic anteriormente
  if (this.columnaOrdenada === columna) {
    // Si es la misma columna, invierte el orden
    this.sortDir = !this.sortDir;
  } else {
    // Si es una nueva columna, restablece el orden a ascendente
    this.sortDir = true;
  }

  // Actualiza la columna actualmente ordenada
  this.columnaOrdenada = columna;

  // Llama al método rellenarItems con la columna y el orden
  this.rellenarOrdenes(this.pageActual, this.cantidad,columna, this.sortDir ? 'asc' : 'desc');
  }

  changePage(page: number) {
    this.currentPage = page;
    this.rellenarOrdenes(this.currentPage-1,this.cantidad,"idItem",this.sortDir);
    // Lógica adicional para cambiar la página en tu aplicación
  }

  getPageNumbers(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

}
