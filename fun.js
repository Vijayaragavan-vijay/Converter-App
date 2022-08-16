let span11 = document.querySelector('#span1');
let span22 = document.querySelector('#span2');
let span33 = document.querySelector('#span3');
let text1 = 'Length Convertion';
let text2 = 'weight Convertion';
let text3 = 'Time Convertion';
let text = 'Hello I am vijayaragavan';
let voice1 = new SpeechSynthesisUtterance(text1);
span11.onclick = () => {
    speechSynthesis.speak(voice1);
}

let voice2 = new SpeechSynthesisUtterance(text2);
span22.onclick = () => {
    speechSynthesis.speak(voice2);
}

let voice3 = new SpeechSynthesisUtterance(text3);
span33.onclick = () => {
    speechSynthesis.speak(voice3)
}