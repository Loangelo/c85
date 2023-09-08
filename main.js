//Criar uma referência para tela
canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_heigth = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = grencar_image;

}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
ctx.drawImage(background_imgTag, 0,0,canvas.width, canvas.heigth);

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y,greencar_width, greencar_heigth);

}
	



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y >=0)
{
	greencar_y = greencar_y - 10;
	console.log("quando seta para cima for precionada, x = " + greenzcar_x +"|y)
}
}

function down()
{
	function down()
	{
		if(greencar_y <=350)
		{
			greencar_y =greencar_y+ 10;
			console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
			
		}
	}	//Definir função para mover o carro para baixo
}

function left()
{
	function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		
	}
}//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
