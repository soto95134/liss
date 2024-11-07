import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss',
})
export class Section1Component {
  constructor(private router: Router) {}
  gameStarted = false;
  currentQuestionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  gameOver = false;
  gameWon = false;
  currentDialog = 0; // Controla qué pregunta mostrar
  dialogOptions = [
    'Siguiente',
    'Siguiente',
    '¿Que estas haciendo aqui?',
    '¿Que juego?',
    '¿Que son esos números?',
    '¿De que se trata tu reto?',
    'Está bien, comencemos el reto',
  ];
  smugDialog = [
    '*Te acercas al gato y comienzas a hacerle cariñitos en la barbilla con tu mano*',
    '¿Qué estás haciendo? ¿Crees que soy un gato común? Nono no dejes de hacer lo que estás haciendo...', // Primer diálogo
    '*En realidad no es para nada un gato común, debe medir por lo menos 3 metros*', // Segundo diálogo
    'Mi nombre es Smug, y estoy atrapado aquí como tú, ese hijo de perra de Utenhope me atrapo aqui mientras haciamos un juego y ahora quiere que te obligue a jugar a ti tambien, pero ya vera ese bastardo cuando me libere de este lugar, Miautentico poder lo hara pedazos', // Tercer diálogo
    'Miaujaja, a decir verdad yo se muchas cosas, se la verdad sobre todas las cosas y mi sed de saberlo todo me ha hecho enterarme de cosas que reventarian tu cerebro humano, si fuera por mi estarias atrapada aqui hasta el mismisimo infinito, pero ese bastardo de Utenhope... Soy dueño de un numero y no puedo decirtelo a menos que pases mi prueba',
    'Veo que tu cerebro mortal no es muy dotado... asi nunca saldras de aqui pequeña criatura insignificante, debes reunir los 3 numeros de cada demonio en esta sala',
    'Utenhope nos ha dado permiso a cada uno para crear nuestros propios juegos asi que en mi caso sera un Quiz de preguntas, veo en tus ojos que te gusta el terror, nisiquiera te asustas de mi, asi que ¿que tal un juego de preguntas de terror?',
  ];

  questions = [
    {
      question: '¿En qué película aparece el personaje "Freddy Krueger"?',
      answers: ['Pesadilla en Elm Street', 'Halloween', 'Viernes 13', 'It'],
      correct: 'Pesadilla en Elm Street',
    },
    {
      question: '¿Quién dirigió la película *Psicosis*?',
      answers: [
        'Alfred Hitchcock',
        'Wes Craven',
        'Stanley Kubrick',
        'John Carpenter',
      ],
      correct: 'Alfred Hitchcock',
    },
    {
      question: "¿En qué película aparece el personaje 'Jason Voorhees'?",
      answers: ['Viernes 13', 'Halloween', 'Pesadilla en Elm Street', 'Scream'],
      correct: 'Viernes 13',
    },
    {
      question: '¿Cuál es el nombre de la niña poseída en *El exorcista*?',
      answers: ['Regan', 'Linda', 'Sarah', 'Mary'],
      correct: 'Regan',
    },
    {
      question: '¿Quién es el asesino en *Scream*?',
      answers: ['Ghostface', 'Leatherface', 'Michael Myers', 'Jason Voorhees'],
      correct: 'Ghostface',
    },
    {
      question: '¿Dónde se ambienta la película *El resplandor*?',
      answers: [
        'Hotel Overlook',
        'Casa Amityville',
        'Mansión Bates',
        'Hotel California',
      ],
      correct: 'Hotel Overlook',
    },
    {
      question: '¿Qué objeto esconde el payaso Pennywise en *It*?',
      answers: ['Globo rojo', 'Muñeca', 'Cuchillo', 'Sombrero'],
      correct: 'Globo rojo',
    },
    {
      question: '¿Cómo se llama la muñeca de *El conjuro*?',
      answers: ['Annabelle', 'Chucky', 'Samara', 'Carrie'],
      correct: 'Annabelle',
    },
    {
      question: '¿Cuál es el nombre del asesino de *Halloween*?',
      answers: ['Michael Myers', 'Freddy Krueger', 'Jason Voorhees', 'Chucky'],
      correct: 'Michael Myers',
    },
    {
      question: '¿En qué año se estrenó *El exorcista*?',
      answers: ['1973', '1980', '1969', '1984'],
      correct: '1973',
    },
    {
      question: '¿Quién es el director de *El resplandor*?',
      answers: [
        'Stanley Kubrick',
        'Alfred Hitchcock',
        'James Wan',
        'Wes Craven',
      ],
      correct: 'Stanley Kubrick',
    },
    {
      question:
        '¿Cómo se llama el protagonista de *The Ring* en su versión japonesa?',
      answers: ['Sadako', 'Kayako', 'Tomie', 'Akira'],
      correct: 'Sadako',
    },
    {
      question:
        '¿Cuál es el nombre de la actriz que interpreta a Laurie Strode en *Halloween*?',
      answers: [
        'Jamie Lee Curtis',
        'Linda Blair',
        'Sigourney Weaver',
        'Neve Campbell',
      ],
      correct: 'Jamie Lee Curtis',
    },
    {
      question: '¿Cuál es el nombre del hotel en *El resplandor*?',
      answers: ['Overlook', 'Shining Star', 'Grand Hotel', 'Highlander'],
      correct: 'Overlook',
    },
    {
      question:
        "¿Qué famoso director es conocido como el 'Maestro del Suspenso'?",
      answers: [
        'Alfred Hitchcock',
        'Stanley Kubrick',
        'Steven Spielberg',
        'John Carpenter',
      ],
      correct: 'Alfred Hitchcock',
    },
    {
      question: '¿Qué personaje de terror usa un guante con cuchillas?',
      answers: ['Freddy Krueger', 'Jason Voorhees', 'Michael Myers', 'Chucky'],
      correct: 'Freddy Krueger',
    },
    {
      question: '¿Cómo muere el personaje principal en *Saw*?',
      answers: [
        'Se corta un pie',
        'Es decapitado',
        'Es ahogado',
        'Es envenenado',
      ],
      correct: 'Se corta un pie',
    },
    {
      question: '¿Qué criatura es la antagonista en *The Thing*?',
      answers: ['Extraterrestre', 'Zombie', 'Vampiro', 'Fantasma'],
      correct: 'Extraterrestre',
    },
    {
      question:
        '¿Qué objeto causa la maldición en *La maldición de La Llorona*?',
      answers: ['Una cruz', 'Un vestido', 'Un rosario', 'Una muñeca'],
      correct: 'Un rosario',
    },
    {
      question: '¿Cómo muere el primer personaje en *Destino final*?',
      answers: [
        'Explosión de avión',
        'Caída de edificio',
        'Accidente de coche',
        'Electrocución',
      ],
      correct: 'Explosión de avión',
    },
    {
      question: '¿En qué película el asesino usa una máscara de hockey?',
      answers: ['Viernes 13', 'Halloween', 'El juego del miedo', 'Scream'],
      correct: 'Viernes 13',
    },
    {
      question: '¿Quién es el director de *Insidious*?',
      answers: ['James Wan', 'Wes Craven', 'Sam Raimi', 'John Carpenter'],
      correct: 'James Wan',
    },
    {
      question: "¿Quién interpreta a 'Carrie' en la adaptación de 1976?",
      answers: [
        'Sissy Spacek',
        'Jamie Lee Curtis',
        'Linda Blair',
        'Sigourney Weaver',
      ],
      correct: 'Sissy Spacek',
    },
    {
      question: '¿Qué película presenta a una muñeca llamada Chucky?',
      answers: [
        'El muñeco diabólico',
        'Annabelle',
        'La maldición',
        'La noche de los muertos vivientes',
      ],
      correct: 'El muñeco diabólico',
    },
    {
      question: '¿En qué película aparece el personaje Norman Bates?',
      answers: ['Psicosis', 'El resplandor', 'Halloween', 'The Babadook'],
      correct: 'Psicosis',
    },
    {
      question:
        '¿Qué actor interpreta a Drácula en la película de 1992 *Drácula de Bram Stoker*?',
      answers: [
        'Gary Oldman',
        'Bela Lugosi',
        'Christopher Lee',
        'Keanu Reeves',
      ],
      correct: 'Gary Oldman',
    },
    {
      question: '¿Qué tipo de muñeco es Annabelle?',
      answers: ['Raggedy Ann', 'Rag Doll', 'Porcelana', 'Goma'],
      correct: 'Raggedy Ann',
    },
    {
      question: '¿Qué película trata sobre un payaso llamado Art?',
      answers: ['Terrifier', 'It', 'Clown', 'The Funhouse'],
      correct: 'Terrifier',
    },
    {
      question: '¿Cómo se llama la familia en *La masacre de Texas*?',
      answers: ['Sawyer', 'Smith', 'Doe', 'Bates'],
      correct: 'Sawyer',
    },
    {
      question: '¿Cuál es la frase de terror más icónica de *Psicosis*?',
      answers: [
        'We all go a little mad sometimes',
        "Here's Johnny!",
        'Do you like scary movies?',
        "One, two, Freddy's coming for you",
      ],
      correct: 'We all go a little mad sometimes',
    },
  ];

  usedQuestions: Set<number> = new Set(); // Para llevar registro de las preguntas ya usadas

  currentQuestionData: any; // Propiedad de lectura/escritura para la pregunta actual

  ngOnInit(): void {
    // Mezclar las respuestas al inicializar el componente
    this.questions.forEach((question) => {
      question.answers = this.shuffleAnswers(question.answers);
    });
    this.setRandomQuestion(); // Establecer una pregunta aleatoria cuando se inicia el componente
  }

  // Función para mezclar las respuestas
  shuffleAnswers(answers: string[]): string[] {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ]; // Intercambiar respuestas
    }
    return shuffledAnswers;
  }

  // Función para establecer una pregunta aleatoria
  setRandomQuestion() {
    if (this.usedQuestions.size >= this.questions.length) {
      this.usedQuestions.clear(); // Reinicia cuando se hayan usado todas las preguntas
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.questions.length);
    } while (this.usedQuestions.has(randomIndex));

    this.usedQuestions.add(randomIndex);
    this.currentQuestionData = this.questions[randomIndex]; // Actualiza la pregunta actual
  }

  // Función para comenzar el juego
  startGame() {
    if (this.currentDialog < this.smugDialog.length - 1) {
      this.currentDialog++; // Avanza al siguiente diálogo
    } else {
      this.gameStarted = true; // Inicia el juego
      this.setRandomQuestion(); // Asignar una pregunta aleatoria cuando comience el juego
    }
  }

  // Comprobar la respuesta seleccionada
  checkAnswer(selectedAnswer: string) {
    if (this.gameOver || this.gameWon) {
      return; // No hacer nada si el juego ya terminó
    }

    if (selectedAnswer === this.currentQuestionData.correct) {
      this.correctAnswers++;
      if (this.correctAnswers >= 1) {
        this.gameWon = true; // El jugador ha ganado al responder 10 preguntas correctas
      } else {
        this.nextQuestion(); // Siguiente pregunta si aún no ha ganado
      }
    } else {
      this.incorrectAnswers++;
      if (this.incorrectAnswers >= 3) {
        this.gameOver = true; // El jugador ha perdido al responder 3 preguntas incorrectas
      } else {
        this.nextQuestion(); // Siguiente pregunta si no ha perdido
      }
    }
  }

  // Avanzar a la siguiente pregunta
  nextQuestion() {
    this.setRandomQuestion(); // Actualiza con una nueva pregunta aleatoria
  }

  // Reiniciar el juego
  reintentar() {
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.gameOver = false;
    this.gameWon = false;
    this.setRandomQuestion(); // Restablece la pregunta actual al reiniciar el juego
  }

  // Volver al lobby
  volver() {
    this.router.navigate(['/lobby']).then(() => window.location.reload());
  }
}
