/**
 * p5js pong
 * 
 * 
 */

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 800 x 400
	createCanvas(800, 400);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de azul escuro
	background(19, 29, 140);

	// bastao jogador 1
	fill(255, 255, 255);
	rect(23, 99, 32, 107); // posicao x, posicao y, largura, altura
	// bastao jogador 2
	fill(255, 255, 255);
	rect(744, 129, 32, 107); // posicao x, posicao y, largura, altura
	// bola
	fill(113, 122, 236);
	ellipse(385, 119, 35);
}
