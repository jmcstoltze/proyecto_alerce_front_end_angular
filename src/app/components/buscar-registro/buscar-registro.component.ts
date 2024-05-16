import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-buscar-registro',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './buscar-registro.component.html',
  styleUrl: './buscar-registro.component.css'
})
export class BuscarRegistroComponent {

}
