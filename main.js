var arr_size = 6;


var colors = generateColors(arr_size);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var message = document.getElementById("message");
var heading = document.getElementById("heading");
var reset = document.getElementById("newColors");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;



for(var i = 0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			message.textContent = "CORRECT";
			reset.textContent = " PLAY AGAIN ?";
			heading.style.backgroundColor = clickedColor;
		}

			
		else{
			message.textContent = "TRY AGAIN"
			this.style.backgroundColor = "#232323";
		}
		
	});

}






// Asigning Correct colors to squares  if click correctly
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}


// picking up a random color and assigning it to pickedColor
function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// Assigning randoms colors to an Array
function generateColors(num){
	var arr = [];

	for(var i =0;i < num ;i++){
		arr[i] = randomColor();
	}


	return arr;
}


// generating random colors 
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var str = "rgb(" + r + ", " + g + ", " + b + ")";

	return str;
}

// generating colors for EASY MODE

var easy = document.getElementById("easy");
easy.addEventListener("click", function(){
	
	colors = generateColors(3);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "new colors"
	message.textContent="";

	this.style.color = "white";
	this.style.backgroundColor = "steelblue";
	hard.style.color = "steelblue";
	hard.style.backgroundColor = "white";

	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		if(i>=3){
			squares[i].style.visibility = "hidden";
		}

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				message.textContent = "CORRECT";
				reset.textContent = " PLAY AGAIN ?";
				heading.style.backgroundColor = clickedColor;
			}

				
			else{
				message.textContent = "TRY AGAIN"
				this.style.backgroundColor = "#232323";
			}
		
		});

	}


});

// generating colors for HARD MODE 
var hard = document.getElementById("hard");
hard.addEventListener("click", function(){
	
	colors = generateColors(6);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "new colors";
	message.textContent="";

	this.style.backgroundColor = "steelblue";
	this.style.color = "white";
	easy.style.backgroundColor = "white";
	easy.style.color = "steelblue";

	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		if(i>=3){
			squares[i].style.visibility = "visible";
		}

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				message.textContent = "CORRECT";
				reset.textContent = " PLAY AGAIN ?";
				heading.style.backgroundColor = clickedColor;
			}

				
			else{
				message.textContent = "TRY AGAIN"
				this.style.backgroundColor = "#232323";
			}
		
		});

	}


});

// Generating new set of colors 

reset.addEventListener("click",function(){
	

	colors = generateColors(6);
	pickedColor = pickRandomColor();
	reset.textContent = "new colors"
	message.textContent="";
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				message.textContent = "CORRECT";
				reset.textContent = " PLAY AGAIN ?";
				heading.style.backgroundColor = clickedColor;
			}

				
			else{
				message.textContent = "TRY AGAIN"
				this.style.backgroundColor = "#232323";
			}
		
		});

	}

});

