/*1. Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.*/
console.log("Ejercicio 1");

/* Encontramos el boton*/
const buttomElement = document.getElementById("buttom");

/*Constante del callback del boton*/

const printClick = (event) => {
  console.log("Pínchame");
};

/*Creamos el evento*/
buttomElement.addEventListener("click", printClick);

/*2. Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"*/

/* Encontramos el h1*/
const titleElement = document.getElementById("title");

/*Constante del callback del titulo*/
const titleHover = (event) => {
  titleElement.textContent = "Quita de encima!!!";
};

const titleNoHover = (event) => {
  titleElement.textContent = "Soy un título";
};

/*Creamos el evento*/
titleElement.addEventListener("mouseover", titleHover);
titleElement.addEventListener("mouseleave", titleNoHover);

/*3. Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control*/

/* Encontramos el p*/
const textElement = document.getElementById("text");

/* Constante del callback del texto */
const keypress = (event) => {
  textElement.textContent = `Has pulsado la tecla ${event.key}`;
};

const keynopress = (event) => {
  textElement.textContent = "Esperando entrada de teclado...";
};

/* Creamos el evento */
document.addEventListener("keydown", keypress);
document.addEventListener("keyup", keynopress);

/*4. Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
 */

const words = ["Hola1", "que2", "tal3", "estas4", "tu5"];
let posicion = 0; /*necesitamos saber la posición de los elementos del array*/

/* Encontramos los elementos de HTML*/
const prevElement = document.getElementById("prevbuttom");
const nextElement = document.getElementById("nextbuttom");
const changeTextElement = document.getElementById("h2");

/* Funciones del callback*/

/*Necesitamos una función que actualice el texto en el elemento <h2> en base a la posición actual en el array.*/
const actualizarTexto = () => {
  changeTextElement.textContent = words[posicion];
};

/*Función para ir para delante, añade una posición más, si la posición llega al final, vuelve a la posición 0*/
const nextWord = () => {
  posicion++;
  if (posicion >= words.length) {
    posicion = 0;
  }
  actualizarTexto();
};

/*Función para ir para atrás. Ve para atrás, si la posición es menor que 0, la posición es la última del array*/

const prevWord = () => {
  posicion--;
  if (posicion < 0) {
    posicion = words.length - 1;
  }
  actualizarTexto();
};

/* Eventos*/
/*boton siguiente*/
nextElement.addEventListener("click", nextWord);
/*boton anterior*/
prevElement.addEventListener("click", prevWord);
