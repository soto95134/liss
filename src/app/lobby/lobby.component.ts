import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CardModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  constructor(private router: Router) {}

  cuestionario() {
    this.router
      .navigate(['/cuestionario'])
      .then(() => window.location.reload());
  }

  memoria() {
    this.router.navigate(['/memoria']).then(() => window.location.reload());
  }

  adivina() {
    this.router.navigate(['/adivina']).then(() => window.location.reload());
  }

  alma() {
    this.router.navigate(['/alma']).then(() => window.location.reload());
  }
}
