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
	console.log("applause button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3NzVf/applause-180037.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});
boo.addEventListener("click", function(){
	console.log("boo button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3NThf/boo-6377.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});
gasp.addEventListener("click", function(){
	console.log("gasp button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3NTRf/gasp-7117.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});
tada.addEventListener("click", function(){
	console.log("tada button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3NTFf/tada-fanfare-a-6313.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});
victory.addEventListener("click", function(){
	console.log("tada button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3NDhf/victory-1-90174.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});
wrong.addEventListener("click", function(){
	console.log("wrong button clicked");
	let mp3=new Audio('https://od.lk/s/MTFfMzg5MTU3ODBf/buzzer-or-wrong-answer-20582.mp3');
	mp3.play();
	document.body.appendChild(mp3);
	sound.push(mp3);
});

stop.addEventListener("click", function(){
console.log("Stop button clicked");
	sound.forEach(snd=>{
		snd.pause();
		snd.currentTime = 0;
	})
	sound = []; 
});
