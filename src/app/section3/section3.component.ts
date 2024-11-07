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
  gamestart = false;
  gameOver = false;
  gameLost = false; // Variable para controlar si el jugador ha perdido
  currentRiddleIndex = 0; // Index of current riddle
  currentDialog = 0; // Controla qué pregunta mostrar
  dialogOptions = [
    'Acercarme',
    '¿Como sabes mi nombre?',
    'Entiendo (en verdad no entiendes una mierda)',
    '¿Es enserio? lo agradeceria mucho',
    'No estoy entendiendo nada',
    '¿Bendicion?',
    'Creo que lo entiendo (no lo entiendes)',
    'Comenzar el juego',
  ];
  smugDialog = [
    '*Akala te mira desde el fondo de la sala*',
    '¿Lisset, no?', // Primer diálogo
    '*Sientes como se heriza tu piel en presencia de este demonio, no es como los demas* Yo se muchas cosas niña, Smug alardea sobre el "saber" pero el entendimiento es primordial, solo la comprension nos lleva a la sabiduria y a la lectura de como se mueven los hilos del destino', // Segundo diálogo
    'Ohh... asi que la insignificante humana entiende, se que ya sabes sobre los numeros y las pruebas, Utenhope nos retendra a todos aqui hasta que pases las tres pruebas y tal y como hizo Kraken podria darte una prueba facil y salir todos de aqui', // Tercer diálogo
    'Si, enserio, pero... no quiero, Utenhope me dijo que si no te dejaba pasar me daria uno de los pergaminos de Radaghon, pero no dejarte pasar implica encerrarte aqui por toda la eternindad y a mi y a esos otros dos contigo, al verte he encontrado algo interesante, los humanos son reconocidos por ser idiotas insignificantes y autodestructuvos pero, ¿y si hago que pruebes un poco de la iluminacion?¿como sera un humano despierto?',
    'Mis disculpas pequeña descendiente del mono, te lo explicare de forma sensilla, quiero que seas iluminada y la unica manera de hacerlo es pasando mi prueba, una vez que lo hagas, quiza puedas aguantar la presencia de Utenhope, ademas esos otros dos bastardos ya te dieron su bendicion junto con su numero.',
    '*exala irritada* Sin la bendicion de Smug no podrias haberte dado cuenta de la presencia de Kraken, es tan irrelevante que no puedes verlo a menos que tu mente sepa que existe de antemano, sin la bendicion Kraken para hacer irrelevante todo, tu cerebro habria explotado al entrar en contacto con mi aura despertada, en palabras mas sensillas, te dio la habilidad de que todo te valiera madres, incluyendo la verdad del mundo',
    '*Te mira hacia abajo* da igual, pasa mi prueba, ilumina tu mente, obten mi numero y quiza seas capaz de estar en presencia de Utenhope sin morir en el intento.',
  ];
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

  startGame() {
    if (this.currentDialog < this.smugDialog.length - 1) {
      this.currentDialog++; // Avanza al siguiente diálogo
    } else {
      this.gamestart = true;
    }
  }
}
