import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-lista-item-admin',
  templateUrl: './lista-item-admin.component.html',
  styleUrls: ['./lista-item-admin.component.css']
})
export class ListaItemAdminComponent {
    //Atributos
    lista_items: any = [];
    nombreItem:any;
    cantidad:any;
    itemCode: any ='';
    item: any;
    pages:number=0;
    pageActual:number=0;
    botonprev=true;
    boton=true;
    currentPage: number = 1;  
    sortDir:boolean = true;
    private columnaOrdenada: string = '';
  
    //Constructor
    constructor(private andService: AndService, private modal:NgbModal,private router:Router) { }
  
    //Inicio del componenete
    ngOnInit(): void {
      this.cantidad=10;
      this.rellenarItems(this.pageActual,this.cantidad,"idItem",this.sortDir);
    }
    rellenarItems(pagina,cantidad,orderBy,sortDir){
      this.andService.listaItems(pagina,cantidad,orderBy,sortDir).subscribe(
        (data:any) => {
            this.lista_items = data.content;
            this.pages = data.allPage;
            console.log(data);
            this.boton = false;
        },
        (error) => {
          console.log(error);
        }
      );
    } 

    buscarItemNombre(){
      console.log(this.nombreItem);
      this.andService.listarItemsByNombre(this.nombreItem).subscribe(
        (data:any)=>{
          console.log(data);
          this.lista_items = data;
        }
      );
    }



    sortColumn(columna){
      this.rellenarItems(this.currentPage-1,this.cantidad,columna,this.sortDir);
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
    this.rellenarItems(this.pageActual, this.cantidad,columna, this.sortDir ? 'asc' : 'desc');
    }

    changePage(page: number) {
      this.currentPage = page;
      this.rellenarItems(this.currentPage-1,this.cantidad,"idItem",this.sortDir);
      // Lógica adicional para cambiar la página en tu aplicación
    }

    getPageNumbers(pages: number): number[] {
      return Array.from({ length: pages }, (_, index) => index + 1);
    }
  

  
    
    //Metodo para buscar un producto
    buscarItemCode() {
      /*Swal.fire({
        icon: 'question',
        title: "Buscar Producto",
        text: "¿Desea Buscar el producto?",
        showCancelButton: true,
        confirmButtonColor: '#3CC3C8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar'
      }).then(
        (e) => {
          if (e.isConfirmed) {*/
            this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
              (data) => {
                this.item = data;
                this.ngOnInit();
                /*Swal.fire("Exito", 'Producto Buscado: ' + this.item.itemName, 'success');*/
                this.modal.dismissAll();
              },
              (error) => {
                //Swal.fire("Error", "No existe ese articulo", 'error');
                this.modal.dismissAll();
              }
            )
          }
        //}
      //);
    //}
  
 
    //Abrir ventana modal para buscar producto
    open(agregarItem) {
      this.modal.open(agregarItem, { centered: true });
    }

    crearItem(){
      this.router.navigate[('admin/item/crear')];
    }


}
