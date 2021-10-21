import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss']
})
export class ConocenosComponent implements OnInit {

  public empleados: Array<Empleado> = [];

  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(): void{
    this.loadInfo();
  }

  loadInfo(){
    this.empleadoService.getEmpleados().subscribe((response) => {
      this.empleados = response;
    })
  }

}
