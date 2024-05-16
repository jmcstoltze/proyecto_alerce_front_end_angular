import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-listar-registro',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './listar-registro.component.html',
  styleUrl: './listar-registro.component.css'
})
export class ListarRegistroComponent {

}
