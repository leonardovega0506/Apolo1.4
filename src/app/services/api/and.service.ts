import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class AndService {

  //Status del Servicio
  public andStatus = new Subject<boolean>();

  //Base del proyecto
  baseAnd: string = `${baseUrl}`

  //Constructor
  constructor(private http: HttpClient) { }


  /* ***Productos*** */
  //Listar los Productos
  public listaItems(pagina:any,pageSize:any,orderBy:any,sort:any) {
    return this.http.get(this.baseAnd + "/item?orderBy="+orderBy+"&pageNo="+pagina+"&pageSize="+pageSize+"&sortDir="+sort);
  }

  public listarItemsByNombre(nombre){
    return this.http.get(this.baseAnd+"/item/itemName?nombre="+nombre);
  }

  //Obtener el producto por el codigo
  public obtenerItemByItemCode(itemCode: any) {
    return this.http.get(this.baseAnd + "/item/itemCode?itemCode=" + itemCode);
  }

  public obtenerItemById(id:any){
    return this.http.get(this.baseAnd+"/item/"+id);
  }

  //Crear Un Producto en MySQL y SAP
  public crearItem(formItem: any) {
    return this.http.post(this.baseAnd + "/item", formItem);
  }

  //Actualizar un Producto en MySQL y SAP
  public actualizarItem(formItem: any) {
    return this.http.put(this.baseAnd + "/item", formItem);
  }

  /* **Foto** */
    //Listar los Productos
    public listaItemsFoto(pagina:any,pageSize:any,orderBy:any,sort:any) {
      return this.http.get(this.baseAnd + "foto?orderBy="+orderBy+"&pageNo="+pagina+"&pageSize="+pageSize+"&sortDir="+sort);
    }
  
    //Obtener el producto por el codigo
    public obtenerItemFotoByItemCode(itemCode: any) {
      return this.http.get(this.baseAnd + "foto/itemCode?itemCode=" + itemCode);
    }
  
    public obtenerFotoItemById(id:any){
      return this.http.get(this.baseAnd+"/foto/"+id);
    }
  
    //Crear Un Producto en MySQL y SAP
    public crearFotoItem(formItem: any) {
      return this.http.post(this.baseAnd + "/foto", formItem);
    }
  
    //Actualizar un Producto en MySQL y SAP
    public actualizarFotoItem(formItem: any) {
      return this.http.put(this.baseAnd + "/foto", formItem);
    }

  /* ***Ordenes*** */

  //Asignar una orden en MySQL desde SAP
    public asignarOrden(docNum: any, id: any) {
    return this.http.get(this.baseAnd + "/orden/assign-order/"+id+"?docNum="+docNum);
  }

  //Listar las ordenes
  public listaOrdenes(pageNumber:any, pageSize, orderBy, sort) {
    return this.http.get(this.baseAnd + "/orden?orderBy="+orderBy+"&pageNO="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sort);
  }

  //Listar orden por proveedor
  public listaOrdenesByCardName(cardName){
    return this.http.get(this.baseAnd+"/orden/cardName?cardName="+cardName);
  }

  //Listar orden por codigo proveedor
  public listarOrdenesByCardCode(cardCode, pageNo, pageSize){
    return this.http.get(this.baseAnd+"/orden/cardCode?cardCode="+cardCode+"&pageNO="+pageNo+"&pageSize="+pageSize)
  }

  //Obtener la orden por el ID
  public obtenerOrdenById(id: any) {
    return this.http.get(this.baseAnd + "/orden/" + id);
  }

  //Obtener la orden por el numero de entrada
  public obtenerOrdenByDocNum(docNum: any) {
    return this.http.get(this.baseAnd + "/orden/docNum?docNum=" + docNum);
  }

  public obtenerDetallesOrden(id:any){
    return this.http.get(this.baseAnd+"/orden/details/"+id);
  }

  public obtenerFotoDetallesOrden(id:any){
    return this.http.get(this.baseAnd+"/orden/photo/"+id);
  }


  /* ***Registros*** */
  //Listar todos los registros de tiempo
  public listarRegistros(pageNumber:any, pageSize:any, orderBy, sort, area) {
    if(area!=null){
      return this.http.get(this.baseAnd + "/registro?area="+area+"&orderBy="+orderBy+"&pageNO="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sort);
    }
    else{
      return this.http.get(this.baseAnd + "/registro?orderBy="+orderBy+"&pageNO="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sort);
    }

  }

  //Listar todos los registros por proveedor
  public listarRegistrosProProveedor(pageNumber:any, pageSize:any, orderBy, sort, area,proveedor) {
    if(area!=null){
      return this.http.get(this.baseAnd + "/registro/proveedor?area="+area+"&orderBy="+orderBy+"&pageNO="+pageNumber+"&pageSize="+pageSize+"&proveedor="+proveedor+"&sortDir="+sort);
    }
    else{
      return this.http.get(this.baseAnd + "/registro/proveedor?orderBy="+orderBy+"&pageNO="+pageNumber+"&pageSize="+pageSize+"&proveedor="+proveedor+"&sortDir="+sort);
    }
  }

  
  //Obtener el registro de tiempo por el id
  public obtenerRegistroByID(id: any) {
    return this.http.get(this.baseAnd + "/registro/" + id);
  }

  //Crear un registro de tiempo
  public crearRegistro(tipo:any, registro:any) {

      return this.http.post(this.baseAnd + "/registro?tipo="+tipo,registro);
  }


  //Generar el Tiempo para Almacen
  public generarTiempoAlmacen(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registro/almacen-s/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Almacen
  public generarTiempoAlmacenVerificado(idRegistro: any,comentarios) {
    return this.http.put(this.baseAnd + "/registro/almacen-v/" + idRegistro+"?comentarios="+comentarios, idRegistro);
  }

  //Generar el Tiempo para Muestra mandada a compras
  public generarTiempoCompraMM(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registro/compra-m/" + idRegistro, idRegistro);
  }

  //Generar el Tiempo para Transito
  public generarTiempoTransito(idRegistro: any, maquila: any) {
    return this.http.put(this.baseAnd + "/registro/transito/" + idRegistro + "?maquila=" + maquila, idRegistro);
  }

  //Generar el Tiempo para Orden Liberada
  public generarTiempoReciboL(idRegistro: any) {
    return this.http.put(this.baseAnd + "/registro/recibo-l/" + idRegistro, idRegistro);
  }

  //Generar el tiempo para pedido especial
  public generarTiempoEspecial(idRegistro:any){
    return this.http.put(this.baseAnd+"/registro/almacen-pedidoEspecial/"+idRegistro,idRegistro);
  }

  public eliminarRegistro(idRegistro){
    return this.http.delete(this.baseAnd+"/registro/"+idRegistro);
  }


  /* ***Usuarios*** */
  //Listar los Usuarios
  public listaUsuarios() {
    return this.http.get(this.baseAnd + "/auth/usuarios");
  }

  //Crear un Usuario
  public crearUsuario(form: any) {
    return this.http.post(this.baseAnd + "/auth/usuario?rol=" + form.area, form);
  }

}
