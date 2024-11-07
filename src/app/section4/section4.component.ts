import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  enteredCode: string = ''; // Almacenará el código ingresado por el jugador
  gameOver: boolean = false; // Controla si el juego se ha ganado
  gameLost: boolean = false; // Controla si el jugador ha fallado
  correctCode: string = '666'; // El código correcto para reclamar el alma

  constructor(private router: Router) {}

  // Método para verificar el código
  checkCode(): void {
    if (this.enteredCode === this.correctCode) {
      this.gameOver = true;
      this.gameLost = false;
    } else {
      this.gameLost = true;
      this.gameOver = false;
    }
  }

  // Método para reiniciar el juego
  restartGame(): void {
    this.enteredCode = ''; // Reinicia el valor del código
    this.gameOver = false; // Resetea el estado de victoria
    this.gameLost = false; // Resetea el estado de derrota
  }

  // Método para volver al lobby
  volver(): void {
    this.router.navigate(['/lobby']);
  }
}
