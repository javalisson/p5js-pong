/**
 * p5js pong
 * 
 * 
 */

console.log("Iniciando programa");

// bastao dos jogadores 1 e 2 e a bola
var j1, j2, b; 

var paraCima = false, 
	paraBaixo = false;

// vai mudar a posicao da bola a cada vez que desenhamos a tela
var deslocamento;

// chamada no inicio do programa
function setup() {
	console.log("Iniciando setup");
	// cria o quadro, com dimensoes 800 x 400
	createCanvas(800, 400);

	// faz o mouse sumir
	noCursor();

	// inicializando as posicoes
	j1 = createVector(23, 99);
	j2 = createVector(744, 129);
	b = createVector(385, 119);

	// inicializa o deslocamento
	deslocamento = createVector(1, -1);

	console.log("Terminando setup");
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// atualiza a posicao do bastao
	if (paraCima == true) {
		j1.y = j1.y - 5;
	}

	if (paraBaixo == true) {
		j1.y = j1.y + 5;
	}

	// verifica se muda de direcao
	if (b.y <= 0 || b.y >= height) {
		deslocamento.rotate(HALF_PI);
	}
	if (b.x >= width || b.x <= 0) {
		deslocamento.rotate(HALF_PI);
	}

	// acelera
	deslocamento.mult(1.0005);

	// atualiza a posicao da bola
	b.add(deslocamento);

	// pinta o fundo de azul escuro
	background(19, 29, 140);

	// bastao jogador 1
	fill(255, 255, 255);
	rect(j1.x, j1.y, 32, 107); // posicao x, posicao y, largura, altura
	// bastao jogador 2
	fill(255, 255, 255);
	rect(j2.x, j2.y, 32, 107); // posicao x, posicao y, largura, altura
	// bola
	fill(113, 122, 236);
	ellipse(b.x, b.y, 35);
}

function mouseMoved() {
	// console.log("mouse movido: " + mouseY);
	j2.y = mouseY;
}

function keyPressed() {
	// console.log("tecla apertada: " + keyCode);
	if (keyCode == UP_ARROW) {
		paraCima = true;
	}

	if (keyCode == DOWN_ARROW) {
		paraBaixo = true;
	}
}

function keyReleased() {
	// console.log("tecla solta: " + keyCode);
	if (keyCode == UP_ARROW) {
		paraCima = false;
	}

	if (keyCode == DOWN_ARROW) {
		paraBaixo = false;
	}
}
