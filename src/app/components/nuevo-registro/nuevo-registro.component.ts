import { Component, OnInit } from '@angular/core';
import { PacientesServiceService } from '../../services/pacientes-service.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css'
})

export class NuevoRegistroComponent implements OnInit {
  
  paciente: any = {}; // Arreglo que almacena la información

  constructor(private pacientesService: PacientesServiceService) { }

  ngOnInit(): void {
    this.crearPaciente();
  }

  // Método para crear un nuevo paciente
  crearPaciente(): void {
    this.pacientesService.postPaciente(
      this.paciente.rut,
      this.paciente.nombre,
      this.paciente.edad,
      this.paciente.sexo,
      this.paciente.enfermedad,
      this.paciente.fechaIngreso,
      this.paciente.revisado
    ).subscribe(
      (data: any) => {
        console.log('Paciente creado exitosamente:', data);
        // Limpia el formulario después de guardar el paciente
        this.paciente = {};
      },
      (error: any) => {
        console.error('Error al crear paciente:', error);
        // Manejo de errores
      }
    );
  }
}
