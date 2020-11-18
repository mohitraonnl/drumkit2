var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
	
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var buttonInnerHtml=this.innerHTML;
		makeSound(buttonInnerHtml);
		buttonAnimation(buttonInnerHtml);

	});
}
document.addEventListener("keypress",function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});
function makeSound(key){
	switch(key){
	case "w":
		var Tom1=new Audio('sounds/tom-1.mp3');
		Tom1.play();
		break;
	case "e":
		var Tom2=new Audio('sounds/tom-2.mp3');
		Tom2.play();
		break;
	case "a":
		var tom3=new Audio('sounds/tom-3.mp3');
		tom3.play();
		break;
	case "s":
		var tom4=new Audio('sounds/tom-4.mp3');
		tom4.play();
		break;
	case "d":
		var snare=new Audio('sounds/snare.mp3');
		snare.play();
		break;
	case "z":
		var crash=new Audio('sounds/crash.mp3');
		crash.play();
		break;
	case "x":
		var kick=new Audio('sounds/kick-bass.mp3');
		kick.play();
		break;
	default:
		console.log(buttonInnerHtml);


}

}
function buttonAnimation(currentkey){

	var activeButton=document.querySelector("."+currentkey);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},50);

}
		