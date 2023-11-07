import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-registros-admin',
  templateUrl: './detalle-registros-admin.component.html',
  styleUrls: ['./detalle-registros-admin.component.css']
})
export class DetalleRegistrosAdminComponent {
    //Constructor
    constructor(private route: ActivatedRoute, private router: Router, private andService: AndService) { }

    //Parametros
    id = 0;
    registro?: any;
  
    //Inicio del Proyecto
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.andService.obtenerRegistroByID(this.id).subscribe(
        (data) => {
          console.log(data);
          this.registro = data;
        }
      );
    }
}
