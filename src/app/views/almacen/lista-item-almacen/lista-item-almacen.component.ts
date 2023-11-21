import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, catchError } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-item-almacen',
  templateUrl: './lista-item-almacen.component.html',
  styleUrls: ['./lista-item-almacen.component.css']
})
export class ListaItemAlmacenComponent {
      //Atributos
      lista_items: any = [];
      nombreItem:any;
      cantidad:any;
      itemCode: any ='';
      item: any;
      pages:number=0;
      pageActual:number=0;
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
  
      //Metodo rellenar items en tabla
      rellenarItems(pagina,cantidad,orderBy,sortDir){
        this.andService.listaItems(pagina,cantidad,orderBy,sortDir).subscribe(
          (data:any) => {
              this.lista_items = data.content;
              this.pages = data.allPage;
              console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      } 
  
      //Metodo para buscar por nombre de item
      buscarItemNombre(){
        console.log(this.nombreItem);
        this.andService.listarItemsByNombre(this.nombreItem).subscribe(
          (data:any)=>{
            console.log(data);
            this.lista_items = data;
          }
        );
      }
  
      //Metodo para ordenar por columna
      sortColumn(columna){
        this.rellenarItems(this.currentPage-1,this.cantidad,columna,this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
  
      // Actualiza la columna actualmente ordenada
      this.columnaOrdenada = columna;
  
      // Llama al método rellenarItems con la columna y el orden
      this.rellenarItems(this.pageActual, this.cantidad,columna, this.sortDir ? 'asc' : 'desc');
      }
  
      //Metodo para cambiar de pagina si existe
      changePage(page: number) {
        this.currentPage = page;
        this.rellenarItems(this.currentPage-1,this.cantidad,"idItem",this.sortDir);
      }
  
      //Metodo para obtener las paginas
      getPageNumbers(pages: number): number[] {
        return Array.from({ length: pages }, (_, index) => index + 1);
      }
    
      //Metodo para buscar un producto
      buscarItemCode() 
      {
        Swal.fire({
          icon: 'question',
          title: "Buscar Producto",
          text: "¿Desea Buscar el producto?",
          showCancelButton: true,
          confirmButtonColor: '#3CC3C8',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Buscar',
          cancelButtonText: 'Cancelar'
        }).then(
          (e) => 
          {
            if (e.isConfirmed) 
            {
              Swal.fire({
                title: 'Buscando',
                didOpen: () => {
                  Swal.showLoading()
                },
              });
              from(
                this.andService.obtenerItemByItemCode(this.itemCode)
              )
              .pipe(catchError((error)=>
              {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error al traer el articulo',
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
                    text: 'Exito al traer el articulo',
                    timer: 2000,
                  });
                  this.ngOnInit();
                  this.modal.dismissAll();
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al traer el articulo',
                    timer: 2000,
                  });
                }
                console.log(data);
                this.ngOnInit();
              });
            }
          }
        );
  
      }
  
      //Abrir ventana modal para buscar producto
      open(agregarItem) {
        this.modal.open(agregarItem, { centered: true });
      }
  
      crearItem(){
        this.router.navigate[('admin/item/crear')];
      }
}
