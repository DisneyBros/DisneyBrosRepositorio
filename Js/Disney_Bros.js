var canvas = document.getElementById('myCanvas'), //se creo una variable, la cual llama a los id="myCanvas"
var context = canvas.getContext('2d');//declara la dimension del juego 


// Class KeyboardListener.
function KeyboardListener() { //enlista todas las teclas del teclado.
 // Properties.
 this.keychar = null; //si las teclas tenian algun valor o funcion, ya con esta funcion quedarian vacias.
 this.getPressed = function () { //pregunta si esta presionada alguna tecla.
  return this.keychar; //si alguna tecla esta presionada le devuelve su accion.
 };
 this.kUp = function () { //pregunta si esta presionada la tecla para saltar y si es asi, devolvera su accion
  return String.fromCharCode(119); //Tecla w
 };
 this.kLeft = function () { //pregunta si esta presionada la tecla para caminar hacia la izquierda y si es asi, devolvera su accion
  return String.fromCharCode(97); //Tecla a
 };
 this.kDown = function () { //pregunta si esta presionada la tecla para agacharse y si es asi, devolvera su accion
  return String.fromCharCode(115); //Tecla s
 };
 this.kRight = function () { //pregunta si esta presionada la tecla para caminar hacia la derecha y si es asi, devolvera su accion
  return String.fromCharCode(100); //Tecla d
 };
  this.kAgarra = function () { //pregunta si esta presionada la tecla para agarra un objeto y si es asi, devolvera su accion
  return String.fromCharCode(79); //Tecla o
 };
  this.kTira = function () { //pregunta si esta presionada la tecla para tirar un objeto y si es asi, devolvera su accion
  return String.fromCharCode(80); //Tecla p
 };
}

var spriteSheet = new Image(); //Imagen de personaje
x = 1; y = 1; //Ubicacion del personaje en la pantalla 

var posiciones = [{x:38, y:6, ancho:25, alto:16}, {x:101, y:6, ancho:25, alto:16}, {x:166, y:6, ancho:25, alto:16}];//ubicacion del personaje en una imagen, es decir su recorte
indiceAnimacion = 0;//contador de inicio
ultimoCuadro = new Date().getTime();//valor numerico del ultimo momento en que se midio la hora
tiempoAcumulado = 0;//acumulador de tiempo

spriteSheet.onload = function(){//funcion que nos carga el juego
  setInterval(actualizarJuego,1000/33);//actualiza el juego cada 33 veces en 1 segundo
}

function actualizarJuego(){//funcion que nos actualizara la imagen del personaje 
  contexto.fillStyle = 'white';//cuando el personaje se mueva no deje rastro de su imagen en el camino
  contexto.fillRect(0, 0, 640, 480);//contorno del lienzo (contorno) 
  var imagenActual = posiciones[indiceAnimacion];//imagen actual del movimiento del personaje
  contexto.drawImage(spriteSheet, imagenActual.x, imagenActual.y, 25, 16, x, y, 25, 16);
  x++;

  var esteCuadro = new Date().getTime();
  var delta = (esteCuadro - ultimoCuadro)/10000;
  ultimoCuadro = esteCuadro;
  tiempoAcumulado += delta;

  if (indiceAnimacion < 2 && tiempoAcumulado > 1) {
    tiempoAcumulado = 0;
    indiceAnimacion++;
  }
}

spriteSheet.src = 'Imagenes/m.jpg'


