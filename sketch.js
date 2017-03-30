var img;
var img2;
var pixelsBuffer = [];
var index;
var cor;

var media =10;
var figura ={
	ver: 255,
}
var xuxaTest =0;
function preload(){
	img = loadImage('images/FotoOne.png');
	img2 = loadImage('images/FotoTwo.png');

}

function setup(){
	createCanvas(img.width, img.height );
	//createCanvas(1000, 1065);
	//background(img2);


	img.loadPixels();
	img2.loadPixels();
	
	var media;



	fixWhite();

	//	set(0,0, img);
	for(var i = 0; i< img.pixels.length ; i+=4){
		
		if(img.pixels[i] == img2.pixels[i] && img.pixels[i + 1] == img2.pixels[i + 1] && img.pixels[i + 2] == img2.pixels[i + 2] && img.pixels[i + 3] == img2.pixels[i + 3]){
		//	console.log("Miraculoso");
			/*
			img.pixels[i + 0] = 255;
			img.pixels[i + 1] = 0;
			img.pixels[i + 2] = 0;
			img.pixels[i + 3] = 255;	
			*/
			pixelsBuffer[i + 0] = 255;
			pixelsBuffer[i + 1] = 0;
			pixelsBuffer[i + 2] = 0;
			pixelsBuffer[i + 3] = 255; 
		//	pixelsBuffer.push(new pegadorDePosicao[x])
		}/*else if(img.pixels[i+0] - media >= img2.pixels[i+0] || img.pixels[i+0] + media <= img2.pixels[i+0] && 
			     img.pixels[i+1] - media >= img2.pixels[i+1] || img.pixels[i+1] + media <= img2.pixels[i+1] &&
			     img.pixels[i+2] - media >= img2.pixels[i+2] || img.pixels[i+2] + media <= img2.pixels[i+2] &&
			     img.pixels[i+3] - media >= img2.pixels[i+3] || img.pixels[i+3] + media <= img2.pixels[i+3]){*/

	else if(img.pixels[i] - img2.pixels[i] <= media && 
			img.pixels[i + 1] - img2.pixels[i + 1] <= media && 
			img.pixels[i + 2] - img2.pixels[i + 2] <= media && 
			img.pixels[i + 3] - img2.pixels[i + 3] <= media ){

			pixelsBuffer[i + 0] = 0;
			pixelsBuffer[i + 1] = 255;
			pixelsBuffer[i + 2] = 255;
			pixelsBuffer[i + 3] = 255;
			xuxaTest +=1;
			
		}else {
			pixelsBuffer[i + 0] = 0;
			pixelsBuffer[i + 1] = 255;
			pixelsBuffer[i + 2] = 0;
			pixelsBuffer[i + 3] = 255; 
			
		}
		
	
	}

	


	updatePixels();
	desenhaImg();
	createImage();
	console.log(xuxaTest);
}




/*
	console.log("GG");
	index = 0;
	var xLocation = 0;
	var yLocation = 0;
	console.log("antes do for: " + pixelsBuffer.length);
	for(var i = 0; i < pixelsBuffer.length; i +=4){
		console.log("entrou dentro do for?");
		var cor = color (pixelsBuffer[i + 0], pixelsBuffer[i + 1], pixelsBuffer[index + 2], pixelsBuffer[index + 3]);
		stroke(255);
		if(yLocation < height){
			point(xLocation, yLocation);
			yLocation++;
		}else  {
			xLocation++;
			yLocation = 0;
		}
		console.log(xLocation)
		/*
		console.log("Red" + pixelsBuffer[i + 0] + " Imagem: " +img.pixels[i]);
		console.log("Blue" + pixelsBuffer[i + 1] + " Image: "+ img.pixels[i + 1]);
		console.log("Green" + pixelsBuffer[i + 2] + " Image: "+ img.pixels[i + 2]);
		console.log("Alfa" + pixelsBuffer[i + 3] + " Image: "+ img.pixels[i + 3]);
		
	}
	console.log("fim");
	updatePixels();
	
	
	image(img, 0,0);
	image(img2, 0, img.height);

*/


function desenhaImg(){

	var index = 0;
	for(var i = 0 ; i < height; i++){

		for(var j = 0; j< width; j ++){
			var cor = color(pixelsBuffer[index], pixelsBuffer[index+1], pixelsBuffer[index+2], pixelsBuffer[index+3]);
			stroke(cor);
			point(j, i);
			index+=4;
		}
	}
}


function fixWhite(){

	for (var i = 0 ; i < img.pixels.length; i ++ ){
		if(img.pixels[i] >= 240){
			img.pixels[i] = 255;
		}

		if(img2.pixels[i] >= 240){
			img2.pixels[i] = 255;
		}

		if(img.pixels[i] <= 15){
			img.pixels[i] = 0;
		}

		if(img2.pixels[i] <= 15){
			img2.pixels[i] = 0;
		}

	}

}