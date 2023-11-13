import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-item-admin',
  templateUrl: './detalle-item-admin.component.html',
  styleUrls: ['./detalle-item-admin.component.css']
})
export class DetalleItemAdminComponent {
  //Atributos
  itemCode:any;
  cadenaImg:string;
  item:any;
  itemData={
    itemCode:'',
    itemName:'',
    ncmCode:'',
    properties4:'',
    idItem:''
  }
  id:any;
  cadenaImpresa: string = '';

  //Constructor
  constructor(private aRoute:ActivatedRoute,private router:Router,private andService:AndService, private modal:NgbModal){}

  //Inicio del Componente
  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];
    console.log(this.id);
    //Detalle de Orden
    this.andService.obtenerItemById(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.item=data;
        const imageUrl = 'http://104.36.166.251:5757/fotos_productos/' + this.item.itemCode + '.jpg';
        this.cadenaImpresa = imageUrl;
      },
      (error=>{
        console.log(error);
      })
    );
    this.cadenaImg =  "";
  }

  //Metodo para regresar el listado
  regresar(){
    this.router.navigate(['admin/items']);
  }

  
  //Abrir ventana modal para editar
  openEditar(itemEdit){
    this.modal.open(itemEdit, { size: 'md' });
  }

  
  //Metodo para actualizar un producto
  actualizarProducto(){
    this.itemData.ncmCode = this.item.ncmCode;
    this.itemData.properties4 = this.item.properties4;
    this.itemData.idItem = this.item.idItem;
    this.itemData.itemCode = this.item.itemCode;
    this.andService.actualizarItem(this.itemData).subscribe(
      (data) =>{
        /*Swal.fire("Productos","Producto Actualizado, correctamente","success").then(
          (e) =>{
            this.modal.dismissAll();
            this.router.navigate(['admin/items']);
          }
        );*/
        this.modal.dismissAll();
      },
      (error)=>{
        /*Swal.fire("Error","Error al actualizar un producto","error");*/
        console.log(error);
      }
    );
  }


}
