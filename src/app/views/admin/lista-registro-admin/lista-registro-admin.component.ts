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
  verificacion: boolean = false;
  numeroEntrada?: any = 0;
  cuadrante = "";
  especial: boolean = false;
  page: number = 0;
  proveedor:any="";
  boton = true;
  botonprev = false;
  lista_registros: any = [];
  notaRemision:any="";

  cuentaOrden=false;

  pages:number=0;
  pageActual:number=0;
  currentPage: number = 1;  
  sortDir:boolean = true;
  private columnaOrdenada: string = '';
  cantidad:any=10;
  proveedorNombre:any;

  registro = {
    docNum : '',
    cuadrante: '',
    proveedor:'',
    notaRemision:'',
  }

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del componente
  ngOnInit(): void {
    console.log(this.page);
    this.rellenarRegistros(this.page,this.cantidad,"idRegistro","asc","");
  }



  rellenarRegistros(pagina: number,cantidad,columna, sort,area): void {
    this.andService.listarRegistros(pagina,cantidad,columna,sort,area).subscribe(
      (data:any) => {
        this.lista_registros = data.content;
        this.pages = data.allPage;
        console.log(data);
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

  crearRegistro(){
    if(this.verificacion){
      if(this.especial){
        this.registro.docNum = this.numeroEntrada;
        this.registro.cuadrante = this.cuadrante;
        this.andService.crearRegistro("Especial",this.registro).subscribe(
          (data)=>{
            console.log(data);
            this.modal.dismissAll();
            this.ngOnInit
          },
          (error)=>{
            console.log(error);
          }
        );
      }
      else{
        this.registro.docNum = this.numeroEntrada;
        this.registro.cuadrante = this.cuadrante;
        this.andService.crearRegistro("Orden",this.registro).subscribe(
          (data)=>{
            console.log(data);
            this.modal.dismissAll();
            this.ngOnInit();
          },
          (error)=>{
            console.log(error);
          }
        );
      }
    }
    else{
      this.registro.proveedor = this.proveedor;
      this.registro.cuadrante = this.cuadrante;
      this.notaRemision = this.notaRemision;
      this.andService.crearRegistro("Proveedor",this.registro).subscribe(
        (data)=>{
          console.log(data);
          this.modal.dismissAll();
          this.ngOnInit();
        },
        (error)=>{
          console.log(error);
        }
      );
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



  //Metodo para buscar orden por numero de Entrada


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
    this.rellenarRegistros(this.currentPage-1,this.cantidad,columna,this.sortDir,"");
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
  this.rellenarRegistros(this.pageActual, this.cantidad,columna, this.sortDir ? 'asc' : 'desc',"");
  }

  changePage(page: number) {
    this.currentPage = page;
    this.rellenarRegistros(this.currentPage-1,this.cantidad,"idRegistro",this.sortDir,"");
    // Lógica adicional para cambiar la página en tu aplicación
  }

  getPageNumbers(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }
}
