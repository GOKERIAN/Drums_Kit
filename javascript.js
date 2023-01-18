// create a function to make  a sound and effect


window.addEventListener("keydown", playSound);

function playSound(e) {
  const key =
   document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // new start of the end
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}


const keys = document.querySelectorAll(".key")

keys.forEach((key)=>
 key.addEventListener("transitionend", removeClass))


 function removeClass(e){

this.classList.remove("playing");
  if (e.propertyName!="transform") return; 

 }