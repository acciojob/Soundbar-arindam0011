//your JS code here. If required.
const applause=document.getElementById("applause");
const boo=document.getElementById("boo");
const gasp=document.getElementById("gasp");
const tada=document.getElementById("tada");
const victory=document.getElementById("victory");
const wrong=document.getElementById("wrong");
const stop=document.getElementById("stop");
 let sound=[];
applause.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});
boo.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});
gasp.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});
tada.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});
victory.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});
wrong.addEventListener("click", function(){
	let mp3=new Audio('https://drive.google.com/drive/folders/1UbicLbJlF28MO6Yw4zZDhQjGbnXZcodt');
	mp3.play();
	sound.push(mp3);
});

stop.addEventListener("click", function(){

	sound.forEach(snd=>{
		snd.push();
		snd.currentTime = 0;
	})
	sounds = []; 
});
