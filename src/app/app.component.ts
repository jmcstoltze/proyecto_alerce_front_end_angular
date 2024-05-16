import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarRegistroComponent } from './components/buscar-registro/buscar-registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    HomeComponent,
    ListarRegistrosComponent,
    BuscarRegistroComponent
  ],
  // templateUrl: './app.component.html',
  templateUrl: './components/home/home.component.html',
  // styleUrl: './app.component.css'
  styleUrl: './components/home/home.component.html'
})
export class AppComponent {
  title = 'proyecto_alerce_evaluacion3';
}
