import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  input1: number | null = null;
  input2: number | null = null;
  input3: number | null = null;
  gameOver: boolean = false;
  gameLost: boolean = false;
  currentDialog = 0;
  currentUtenhopeDialog = 0;
  doorIsOpen = false;
  correctCode = [666, 666, 666];
  incorrectCodes = [[222, 234, 232]];

  dialogOptions = ['Acercarme', '¿Emm... hola?', 'Entiendo'];

  smugDialog = [
    '*Ves una gran puerta de al menos 5 metros con lo que parece una estatua fundida en ella*',
    '*mientras te acercas a la puerta puedes escuchar a la puerta decir en voz bajita: "Ostia Ostia que viene, por fin me toca mi participacion en este videojuego, he esperado años este momento espero hacerlo bien"',
    'bIiIenBeniDa, -dice la estatua mientras un gallito sale de su voz, para acto seguido aclararse la garganta* Bienvenida insignificamente humana, soy la gran puerta del salon de Utenhope, solo puedes pasar si tienes los tres numeros',
  ];

  dialogUtenhopeOptions = [
    'Siguiente',
    'Siguiente',
    'Siguiente',
    'Siguiente',
    'Siguiente',
    'A decir verdad me sorprende un poco, despues de todo tambien atrapaste mi alma aqui...',
    'emm... ¿Gracias?',
    'ho... hola',
    'Siguiente',
    'Muchas gracias? supongo?...',
    'Tomar su mano',
    'Siguiente',
    'Siguiente',
    'Siguiente',
    'Fin <3',
  ];

  utenhopeDialog = [
    '*Entras al gran salon y ves como Utenhope baila al ritmo de la musica mientras algunos Diablillos, y Angeles vuelan por las sala*',
    '*Por lo general te sorprenderia ver angeles aqui, pero gracias a la bendicion de Akala el escenario no te parece tan bizarro*',
    '*Mientras caminas puedes ver como algunos diablillos juegan entre ellos y se hacen travesuras, los angeles por otro lado vuelan tocando instrumentos mientras algunos demonios menores hacen el coro*',
    '*Te detienes en mitad de la sala mientras dos seres de distintas formas y tamaños sentados en sus tronos te miran a lo lejos*',
    '*Utenhope detiene su baile para acercarse a ti con una sonrisa en el rostro*',
    'BIENVENIDA BIENVENIDA, ¿como has pasado tu estancia en el inframundo? un lugar divertido sin duda alguna, veo que has superado a esos tres payasos y has obtenido sus bendiciones JAJAJAJA, no te preocupes, ellos ya estan de regreso en el mundo exterior, cumplieron bien con mis expectativas y si, Akala recibio su pago y todos tienen sus almas de regreso, ¿que? ¿pensabas que no cumplia?',
    'YAA YAA esta bien, se que el ritual te sorprendio un poco pero al final ¿fue divertido no? incluso pedi prestado el inframundo para hacerte una fiesta, mira a esos diablillos como traen tu pastel.',
    '*Giras tu cabeza para ver como tres diablillos pequeños y revoltozos se empujan entre ellos llevando torpemente un pastel gigante de varios pisos que parece estar decorado con sangre, entrañas y un gran corazon*',
    '*Utenhope te mira sonriente* Ohh no es sangre real obviamente, es solo decoracion. Tambien traje a algunos invitados, esos de los tronos son mis hermanos, Lothric y Livet',
    '*Al mirar a los tronos puedes ver a dos personas que no calzan para nada con este lugar, uno de cabello negro largo como el de Utenhope y con las mismas marcas bajo sus ojos mientras un halo negro vuela sobre su cabeza*',
    'La otra parece una chica joven de cabello rubio y mirada pacifica, su Halo es mucho mas grande que el de Utenhope y el de Lothic y pequeñas bolitas que parecen perlas vuelan a su alrededor, Lothric te inclina la cabeza en señal de saludo y Livet se para sobre su trono para saludarte moviendo todo su brazo de izquierda a derecha mientras grita "HOLA HOLAAAAAAAAAAA"*',
    'Bueno, se que debes estar apresurada en recuperar tu alma, pero antes queria mostrarte esta fiesta que prepare para ti, no pude llevarte un regalo al mundo real ya que hay ciertos problemas... economicos... me disculpo por todo eso de tu alma atrapada pero en realidad eso nunca paso, simplemente queria que te divirtieras un rato y que pudieras celebrar tu fiesta con nosotros',
    '*Todos en la sala se levantan para aplaudirte y gritar cosas como "Feliz Cumpleaños", "Te queremos mucho", "Eres la mejor, incluso superaste el reto de Utenhope", tambien unos diablillos al fondo de la sala lloran mientras dicen "yo la conozco desde que era pequeñita TT-TT" y otro le responde "Creen tan rapido Y-Y"',
    '*Despues de un rato de fiesta y comida Utenhope te ofrece su mano* Te has esforzado mucho para llegar hasta aqui y no me refiero solo a este pequeño viaje, sino a tu vida entera, has hecho cosas increibles, has superado retos aun mas dificiles que este y te has construido como una gran persona, eres alguien digna de mi respeto y admiracion y me gustaria que te quedaras pero es hora de finalizar la fiesta, toma mi mano y te llevare de vuelta al mundo exterior',
    'Quiza me vuelvas a ver en el futuro, despues de todo, estoy mas cerca de ti de lo que crees...',
  ];

  images = [
    'assets/throne.jpg', // Imagen 1
    'assets/engel.jpg', // Imagen 3
    'assets/diablillo.jpg', // Imagen 2
    'assets/throne.jpg', // Imagen 4
    'assets/utenhope6.png', // Imagen 6
    'assets/utenhope4.png', // Imagen 7
    'assets/utenhope3.png', // Imagen 5
    'assets/pastel.jpg', // Imagen 8
    'assets/utenhope3.png', // Imagen 9
    'assets/lothric.png', // Imagen 9
    'assets/livet.jpg', // Imagen 9
    'assets/utenhope3.png', // Imagen 9
    'assets/diablillo.jpg', // Imagen 9
    'assets/utenhope3.png', // Imagen 9
    'assets/utenhope3.png', // Imagen 9
  ];

  get currentImage(): string {
    return this.images[this.currentUtenhopeDialog];
  }

  constructor(private router: Router) {}

  // Avanza al siguiente diálogo
  nextDialog(): void {
    if (this.currentDialog < this.smugDialog.length - 1) {
      this.currentDialog++;
    }
  }

  nextUtenhopeDialog(): void {
    if (this.currentUtenhopeDialog < this.utenhopeDialog.length - 1) {
      this.currentUtenhopeDialog++;
    }
  }

  // Verifica si el código ingresado es correcto
  checkCode(): void {
    // Convierte los números de los inputs a cadenas para compararlos
    const input1Str = this.input1?.toString();
    const input2Str = this.input2?.toString();
    const input3Str = this.input3?.toString();

    // Verifica si los tres números ingresados son 6, 6, y 6
    if (input1Str === '6' && input2Str === '6' && input3Str === '6') {
      this.gameOver = true; // Código correcto
      this.gameLost = false;
    }
    // Verifica si los números son 222, 212, y 232
    else if (
      input1Str === '222' &&
      input2Str === '212' &&
      input3Str === '232'
    ) {
      this.gameLost = true; // Mensaje personalizado para la entrada incorrecta
      this.gameOver = false;
    } else {
      this.gameLost = true; // Mensaje para cualquier otra combinación incorrecta
      this.gameOver = false;
    }
  }

  // Reinicia el juego
  restartGame(): void {
    this.input1 = null;
    this.input2 = null;
    this.input3 = null;
    this.gameOver = false;
    this.gameLost = false;
  }

  volver(): void {
    this.router.navigate(['/lobby']);
  }

  enterTheSalon() {
    this.doorIsOpen = true;
  }

  fin() {
    window.close();
  }
}
