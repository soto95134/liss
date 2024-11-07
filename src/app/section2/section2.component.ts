import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss',
})
export class Section2Component {
  constructor(private router: Router) {}
  cards: any[] = [];
  flippedCards: any[] = [];
  matchedCards: any[] = [];
  gameOver = false;
  gamestart = false;
  currentDialog = 0; // Controla qué pregunta mostrar
  dialogOptions = [
    'Siguiente',
    'Siguiente',
    '¿Hola?',
    'Smug me dijo que debia pasar las pruebas',
    '¿De verdad? entonces quiero el numero por favor!!',
    'Algo anda mal',
    '¿QUE PASA?',
    '¿Le diste tu alma asi sin mas?',
    'Está bien, comencemos el reto',
  ];
  smugDialog = [
    '*Te acercas al demonio con un poco de duda*',
    'Mmmm... hueles a humano, cuanto tiempo ha pasado desde que no ¿huelo a un humano? bah tampoco es que importe', // Primer diálogo
    '*Notas como el demonio se da la vuelta y pierde completamente el interez en ti*', // Segundo diálogo
    'Oh, ¿aun estas ahi? que extraño por lo general las demas entidades suelen pasar de mi, bueno soy irrelevante de todos modos', // Tercer diálogo
    'Mmm ¿pruebas? ES CIERTO LAS PRUEBAS !! Por Belsebu no pense que fuese importante hacer algun tipo de pruebas, despues de todo, ¿que es lo que debemos probar? ¿tiene algun sentido evaluar tu capacidad de alguna manera? creo que no tiene importancia, creo que simplemente podria darte mi numero y ya',
    'Jajaja ¿por favor? eres demasiado amable para estar aqui, asi que mira, los numeros son...',
    '*notas como Kraken comienza a retorcerse del dolor*',
    'Es ese maldito de Utenhope, si solo te doy el numero nos hace pasar por un dolor insoportable, pero habia olvidado que eso era relevante. Cai aqui cuando Utenhope me dijo que necesitaba mi alma para un trabajo y ahora estoy encerrado con los demas.',
    'No pense que fuera tan importante, bien, vamos a jugar, Utenhope no puso regla sobre los juegos asi que usaremos este mazo de cartas que tengo aqui y uso para jugar cuando me siento solo.',
  ];

  // Los nombres o imágenes de los personajes de terror
  cardValues: string[] = [
    'assets/images/1.png', // Ruta a la imagen de Freddy Krueger
    'assets/images/2.jpg', // Ruta a la imagen de Jason Voorhees
    'assets/images/3.jpg', // Ruta a la imagen de Michael Myers
    'assets/images/4.png', // Ruta a la imagen de Ghostface
    'assets/images/5.png', // Ruta a la imagen de Chucky
    'assets/images/6.png', // Ruta a la imagen de Pennywise
    'assets/images/7.png', // Ruta a la imagen de Regan
    'assets/images/8.png', // Ruta a la imagen de Sadako
  ];

  ngOnInit(): void {
    this.initializeGame();
  }

  // Inicializar el juego
  initializeGame(): void {
    this.cards = this.shuffleCards([...this.cardValues, ...this.cardValues]); // Duplicar valores para emparejarlos
    this.flippedCards = [];
    this.matchedCards = [];
    this.gameOver = false;
  }

  // Mezclar las cartas
  shuffleCards(cards: string[]): string[] {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  // Voltear la carta
  flipCard(index: number): void {
    // Evita voltear las cartas que ya están emparejadas
    if (
      this.flippedCards.length < 2 &&
      !this.flippedCards.includes(index) &&
      !this.matchedCards.includes(index) // Evita voltear cartas emparejadas
    ) {
      this.flippedCards.push(index);
      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    }
  }

  // Verificar si las cartas coinciden
  checkMatch(): void {
    const [firstCardIndex, secondCardIndex] = this.flippedCards;
    if (this.cards[firstCardIndex] === this.cards[secondCardIndex]) {
      this.matchedCards.push(firstCardIndex, secondCardIndex);
      if (this.matchedCards.length === this.cards.length) {
        this.gameOver = true;
      }
    }
    setTimeout(() => {
      this.flippedCards = [];
    }, 1000); // Pausa para ver las cartas
  }

  // Reiniciar el juego
  restartGame(): void {
    this.initializeGame();
  }

  volver() {
    this.router.navigate(['/lobby']).then(() => window.location.reload());
  }

  startGame() {
    if (this.currentDialog < this.smugDialog.length - 1) {
      this.currentDialog++; // Avanza al siguiente diálogo
    } else {
      this.gamestart = true;
    }
  }
}
