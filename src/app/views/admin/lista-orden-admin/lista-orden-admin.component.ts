import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import {catchError,from} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-orden-admin',
  templateUrl: './lista-orden-admin.component.html',
  styleUrls: ['./lista-orden-admin.component.css']
})
export class ListaOrdenAdminComponent {
  //Atributos
  lista_ordenes: any = [];
  page:number=0;
  pages:number=0;
  pageActual:number=0;
  currentPage: number = 1;  
  sortDir:boolean = true;
  private columnaOrdenada: string = '';
  cantidad:any=10;
  proveedorNombre:any;
  docNum:any;


  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Obtener la fecha actual
  getCurrentDate():Date{
    return new Date();
  }

  //Inicio del Sistema
  ngOnInit(): void {
    this.rellenarOrdenes(this.page,this.cantidad,"idOrdenCompra","asc");


  }

  //Listado para obtener las ordenes
  rellenarOrdenes(pagina:number,cantidad,columna,sort){
    this.andService.listaOrdenes(pagina,cantidad,columna,sort).subscribe(
      (data:any) => {
        this.lista_ordenes = data.content;
        this.pages = data.allPage;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Listado para obtener proveedores
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
    Swal.fire({
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
        if (e.isConfirmed) 
          {
            Swal.fire({
              title: 'Buscando',
              didOpen: () => {
                Swal.showLoading()
              },
            });
            from(
              this.andService.obtenerOrdenByDocNum(this.docNum)
            )
            .pipe(catchError((error)=>
            {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al traer la orden' + error,
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
                  text: 'Exito al traer la orden',
                  timer: 2000,
                });
                this.ngOnInit();
                this.modal.dismissAll();
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error al traer la orden',
                  timer: 2000,
                });
              }
              this.ngOnInit();
            });
          }

      });
  }

  //Metodo para abrir la ventana modal de buscar una orden
  openBuscarOrder(buscarOrden) {
    this.modal.open(buscarOrden, { size: 'sm' });
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
    this.rellenarOrdenes(this.currentPage-1,this.cantidad,"idOrdenCompra",'asc');
    // Lógica adicional para cambiar la página en tu aplicación
  }

  getPageNumbers(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }


}
