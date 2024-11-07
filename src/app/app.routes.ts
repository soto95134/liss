import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LobbyComponent } from './lobby/lobby.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent }, // Ruta predeterminada
  { path: 'bienvenido', component: BienvenidaComponent }, // Ruta 'bienvenido'
  { path: 'lobby', component: LobbyComponent },
  { path: 'cuestionario', component: Section1Component },
  { path: 'memoria', component: Section2Component },
  { path: 'adivina', component: Section3Component },
  { path: 'alma', component: Section4Component },
  { path: '**', redirectTo: '' }, // Redirige rutas no encontradas a la ruta predeterminada
];
