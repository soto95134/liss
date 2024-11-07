import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent {
  isDarkMode = false; // Controla el modo oscuro
  section = 1; // Controla en qué sección estamos
  lobbySection = false; // Controla si estamos en el lobby o no

  constructor(private router: Router) {}

  continuar() {
    if (this.section === 1) {
      this.section = 2;
      this.cambiarModoOscuro();
    } else if (this.section === 2) {
      this.section = 3;
    } else if (this.section === 3) {
      this.section = 4;
    } else if (this.section === 4) {
      this.router.navigate(['/lobby']).then(() => window.location.reload());
    }
  }

  cambiarModoOscuro() {
    // Cambiar el modo de la página (modo oscuro)
    this.isDarkMode = !this.isDarkMode;
  }
}
