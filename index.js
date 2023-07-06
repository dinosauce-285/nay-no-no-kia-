const heart = document.getElementById("heart");
const bg = document.getElementById("bg");
const co = document.getElementById("b1");
const ko = document.getElementById("b2");
function appear() { 
  const audio = new Audio('Wow sound effect (no copyright).mp3');
  audio.play();
  heart.style.visibility = "visible";
  heart.style.opacity = "1";
  bg.style.backgroundImage =
    "url(https://i.pinimg.com/originals/a7/5a/59/a75a59b1116cc8282873254511f57286.gif)";
}
function hic() {
    const audio = new Audio('Crying Sound Effect.mp3');
    audio.play();
}
ko.onclick = hic
co.onclick = appear;
