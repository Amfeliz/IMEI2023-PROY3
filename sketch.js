let canvasWidth = 900;
let canvasHeight = 600;
let circleRadius = 10; // Radio inicial del círculo
let isMoving = false; // Variable para controlar el movimiento
let colors = []; // Arreglo de colores del arcoíris
let currentColor = 0; // Índice del color actual
let circleX, circleY; // Posición del círculo

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255); // Fondo blanco
  noStroke(); // Sin borde en el círculo
  frameRate(60); // Velocidad de dibujo

  // Llenar el arreglo de colores del arcoíris
  colors.push(color(148, 0, 211, 100)); // Violeta
  colors.push(color(75, 0, 130, 100)); // Índigo
  colors.push(color(0, 0, 255, 100)); // Azul
  colors.push(color(0, 255, 0, 100)); // Verde
  colors.push(color(255, 255, 0, 100)); // Amarillo
  colors.push(color(255, 127, 0, 100)); // Naranja
  colors.push(color(255, 0, 0, 100)); // Rojo

  // Inicializar la posición del círculo en el centro del canvas
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  // Dibujar el círculo con el color actual
  fill(colors[currentColor]);
  ellipse(circleX, circleY, circleRadius * 2);

  // Movimiento al hacer clic
  if (isMoving) {
    circleX = mouseX;
    circleY = mouseY;
  }
}

function mouseClicked() {
  isMoving = !isMoving; // Cambiar el estado de movimiento al hacer clic
  currentColor = (currentColor + 1) % colors.length; // Cambiar al siguiente color del arcoíris
}
