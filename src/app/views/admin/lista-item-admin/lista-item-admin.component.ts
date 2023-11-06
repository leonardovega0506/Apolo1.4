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
    items: any = [];
    itemCode: any ='';
    item: any;
    page:number=0;
    botonprev=true;
    boton=true;
  
    //Constructor
    constructor(private andService: AndService, private modal:NgbModal,private router:Router) { }
  
    //Inicio del componenete
    ngOnInit(): void {
      this.rellenarItems(this.page);
    }
    rellenarItems(pagina){
      this.andService.listaItems(pagina,10,"idItem","asc").subscribe(
        (data:any) => {
          if(data.last==true){
            this.items = data.content;
            console.log(data);
            this.boton = false;
          }
          else if(pagina<=0){
            this.items = data.contenido;
            console.log(data);
            this.botonprev = false;
          }
          else{
            this.items = data.contenido;
            console.log(data);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
    nextPage(){ 
      this.page += 1;
      this.botonprev=true;
      this.rellenarItems(this.page);
    }
    prevPage(){
      this.page-=1;
      if(this.page==0){
        this.botonprev = false;
        this.boton=true;
        this.rellenarItems(this.page);
      }
      else{
        this.boton=true;
        this.rellenarItems(this.page);
      }
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
