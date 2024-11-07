import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component {
  constructor(private router: Router) {}

  gameOver = false;
  gameLost = false; // Variable para controlar si el jugador ha perdido
  currentRiddleIndex = 0; // Index of current riddle
  riddles = [
    {
      question:
        'Nunca fui creado, pero siempre existí, no puedo ser tocado ni visto, pero todos me perciben. ¿Qué soy?',
      options: ['El vacío', 'El tiempo', 'La oscuridad', 'La eternidad'],
      correctAnswer: 'El tiempo',
      playerAnswer: '',
    },
    {
      question:
        'Viajo a través de los sueños, pero no soy una ilusión. Te atrapo cuando no lo esperas y me escapas cuando me buscas. ¿Quién soy?',
      options: ['La pesadilla', 'El deseo', 'La muerte', 'El olvido'],
      correctAnswer: 'La pesadilla',
      playerAnswer: '',
    },
    {
      question:
        'Cuanto más te alejas de mí, más me acercas. Cuando me alcanzas, ya no me puedes tocar. ¿Qué soy?',
      options: ['El horizonte', 'La esperanza', 'El futuro', 'La luz'],
      correctAnswer: 'El horizonte',
      playerAnswer: '',
    },
    {
      question:
        'Nací sin ser, pero al existir, tomé todo lo que hay. No tengo forma, pero mi sombra cubre todo. ¿Qué soy?',
      options: ['El vacío', 'El miedo', 'El espacio', 'La mentira'],
      correctAnswer: 'El espacio',
      playerAnswer: '',
    },
    {
      question:
        'No puedo ser olvidado, pero nunca te recordaré. Estoy presente en cada respiración, pero nunca me verás. ¿Qué soy?',
      options: ['El alma', 'El pensamiento', 'La conciencia', 'El aire'],
      correctAnswer: 'La conciencia',
      playerAnswer: '',
    },
    {
      question:
        'Mientras más intentas darme forma, más me disuelvo. ¿Quién soy?',
      options: ['El tiempo', 'El viento', 'El conocimiento', 'La verdad'],
      correctAnswer: 'El conocimiento',
      playerAnswer: '',
    },
    {
      question:
        'No nací, pero siempre he estado. No soy parte de ti, pero te habito. El día que me encuentras, ya es demasiado tarde. ¿Qué soy?',
      options: ['El destino', 'La muerte', 'El alma', 'La mente'],
      correctAnswer: 'La muerte',
      playerAnswer: '',
    },
    {
      question:
        'Mi hogar está en las profundidades, pero nunca toco el suelo. Puedo ver a través de las paredes, pero no tengo ojos. ¿Quién soy?',
      options: ['El eco', 'El espectro', 'La sombra', 'El silencio'],
      correctAnswer: 'El espectro',
      playerAnswer: '',
    },
    {
      question:
        'Cierro puertas y ventanas, pero nunca las toco. Soy un reflejo de lo que has perdido, pero te pertenezco. ¿Qué soy?',
      options: ['El miedo', 'El recuerdo', 'El alma', 'La oscuridad'],
      correctAnswer: 'El recuerdo',
      playerAnswer: '',
    },
    {
      question:
        'Cuanto más intentas tocarme, más lejos estoy. Me encontrarás en todos los lugares, pero nunca en el mismo. ¿Qué soy?',
      options: ['El destino', 'La suerte', 'El deseo', 'El futuro'],
      correctAnswer: 'El futuro',
      playerAnswer: '',
    },
  ];

  // Method to check the answer
  checkAnswer(selectedAnswer: string): void {
    const currentRiddle = this.riddles[this.currentRiddleIndex];
    currentRiddle.playerAnswer = selectedAnswer; // Almacena la respuesta del jugador

    // Verifica si la respuesta del jugador es correcta
    const isCorrect = selectedAnswer === currentRiddle.correctAnswer;

    if (isCorrect) {
    } else {
      this.gameLost = true; // Si la respuesta es incorrecta, el jugador pierde
    }

    // Si la respuesta es correcta, se avanza a la siguiente adivinanza
    if (isCorrect && this.currentRiddleIndex < this.riddles.length - 1) {
      this.currentRiddleIndex++;
    } else {
      this.gameOver = true; // Si ya no hay más adivinanzas, termina el juego
    }
  }

  restartGame(): void {
    this.gameOver = false;
    this.gameLost = false;
    this.currentRiddleIndex = 0;
    this.riddles.forEach((riddle) => (riddle.playerAnswer = '')); // Reinicia las respuestas del jugador
  }

  volver() {
    this.router.navigate(['/lobby']).then(() => window.location.reload());
  }
}
