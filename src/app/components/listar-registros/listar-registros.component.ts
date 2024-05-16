import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { PacientesServiceService } from '../../services/pacientes-service.service';

@Component({
  selector: 'app-listar-registros',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FormsModule
  ],
  templateUrl: './listar-registros.component.html',
  styleUrl: './listar-registros.component.css'
})

export class ListarRegistrosComponent implements OnInit {
  
  pacientes: any[] = []; // Arreglo que almacena la información
  constructor(private pacientesService: PacientesServiceService) { }

  ngOnInit(): void {
    this.getPacientes();
  }
  
  getPacientes(): void {
    this.pacientesService.getPacientes()
      .subscribe(
        (data: any) => {
          this.pacientes = data.pacientes; // Asignamos los pacientes al arreglo de pacientes en el componente
        },
        (error: any) => {
          console.error('Error al obtener pacientes:', error);
          // Manejo de error
        }
      );
  }
}
