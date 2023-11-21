import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, catchError } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-registro-almacen',
  templateUrl: './lista-registro-almacen.component.html',
  styleUrls: ['./lista-registro-almacen.component.css']
})
export class ListaRegistroAlmacenComponent {
  
  //Atributos
  verificacion: boolean = false;
  numeroEntrada?: any = 0;
  cuadrante = "";
  especial: boolean = false;
  page: number = 0;
  proveedor:any="";
  lista_registros: any = [];
  notaRemision:any="";
  cuentaOrden=false;
  pages:number=0;
  pageActual:number=0;
  currentPage: number = 1;  
  sortDir:boolean = true;
  private columnaOrdenada: string = '';
  cantidad:any=10;
  filtroRegistros='';
  registroTraido:any;
  comentarios:any;

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
    this.rellenarRegistros(this.page,this.cantidad,"idRegistro","asc","");
  }

  //Metodo para llenar la lista con registros
  rellenarRegistros(pagina: number,cantidad,columna, sort,area): void {
    this.andService.listarRegistros(pagina,cantidad,columna,sort,area).subscribe(
      (data:any) => {
        this.lista_registros = data.content;
        this.pages = data.allPage;
      },
      (error) => {
      }
    )
  }

  //Abrir Ventana Modal
  open(contenido) {
    this.modal.open(contenido, { centered: true });
  }

  //Metodo para mostrar si cuenta con orden
  showData() {
    this.verificacion = true;
  }

  //Metodo para mostrar si no cuenta con orden
  hideData() {
    this.verificacion = false;

  }

  //Metodo para crear el registro nuevo
  crearRegistro(){
    Swal.fire({
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
        if (e.isConfirmed) 
        {
          Swal.fire({
            title: 'Creando',
            didOpen: () => {
              Swal.showLoading()
            },
          });
          if(this.verificacion){
            if(this.especial){
              if(this.numeroEntrada == "0" || this.cuadrante == null){
                Swal.fire({
                  'icon':'warning',
                  'title':'Error',
                  'text':'Por favor no dejes espacios en blanco',
                  timer:2000
                })
              }
              this.registro.docNum = this.numeroEntrada;
              this.registro.cuadrante = this.cuadrante;
              from(
                this.andService.crearRegistro("Especial",this.registro)
              )
              .pipe(catchError((error)=>
              {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error al crear el registro',
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
                    text: 'Exito al crear el registro',
                    timer: 2000,
                  });
                  this.modal.dismissAll();
                  this.ngOnInit
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
            else{
              this.registro.docNum = this.numeroEntrada;
              this.registro.cuadrante = this.cuadrante;
              from(
                this.andService.crearRegistro("Orden",this.registro)
              )
              .pipe(catchError((error)=>
              {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error al crear el registro',
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
                    text: 'Exito al crear el registro',
                    timer: 2000,
                  });
                  this.modal.dismissAll();
                  this.ngOnInit
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
          }
          else{
            this.registro.proveedor = this.proveedor;
            this.registro.cuadrante = this.cuadrante;
            this.notaRemision = this.notaRemision;
            from(
              this.andService.crearRegistro("Proveedor",this.registro)
            )
            .pipe(catchError((error)=>
            {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al crear el registro',
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
                  text: 'Exito al crear el registro',
                  timer: 2000,
                });
                this.modal.dismissAll();
                this.ngOnInit
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
        }
      });

  }

  sortColumn(columna){
    this.rellenarRegistros(this.currentPage-1,this.cantidad,columna,this.sortDir,"");
  if (this.columnaOrdenada === columna) {
    this.sortDir = !this.sortDir;
  } else {
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
  }

  getPageNumbers(pages: number): number[] {
    return Array.from({ length: pages }, (_, index) => index + 1);
  }

  aplicarFiltro(filtro: string) {
    this.filtroRegistros = filtro;
    this.rellenarRegistros(this.pageActual, this.cantidad, 'idRegistro', 'asc', this.filtroRegistros);
  }

  onCantidadChange(value: string) {
    this.rellenarRegistros(this.pageActual, value, 'idRegistro', 'asc', this.filtroRegistros);
  }

      //Accion hacia el servicio de and
      generarAccion(idRegistro: any) {
        this.andService.generarTiempoAlmacen(idRegistro).subscribe(
          (data) => {
            console.log(data);
            this.modal.dismissAll();
            Swal.fire("Exito","Exito al generar la accion","success");
            this.ngOnInit();
          }
        );
      }
      generarAccionVerificar(idRegistro: any) {
        this.andService.generarTiempoAlmacenVerificado(idRegistro,this.comentarios).subscribe(
          (data) => {
            console.log(data);
            this.modal.dismissAll();
            Swal.fire("Exito","Exito al generar la accion","success");
            this.ngOnInit();
          }
        );
      }

      openAcciones(acciones, idRegistro){
        this.modal.open(acciones, { centered: true });
        this.andService.obtenerRegistroByID(idRegistro).subscribe(
          (data) => {
            console.log(data);
            this.registroTraido = data;
          }
        );
      }
}
