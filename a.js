

const about = ["I'm a graphic designer who specialise in character designing and 2D art.", "Voice actress who loves to play around with diffrient accents."];
let aLen = about.length;

let text = "<ul>";
for (let i = 0; i < aLen; i++) 
  {
  text += "<li>" + about[i] + "</li>";
}
text += "</ul>";

document.getElementById("lu").innerHTML = text;
document.getElementById("ld").innerHTML = "amen";

const pr = [" he/him "," they/them "," fae/faer ", " she/her "];
let prl = pr.length;

let t = "<ul>";
for (let i = 0; i < prl; i++) 
  {
  t += "<li>" + pr[i] + "</li>";
}
t += "</ul>";

document.getElementById("prn").innerHTML = t;

function dark(){
  
  const checkBox = document.getElementById("d");
  const paragraph = document.getElementById('bod');
  const h = document.getElementById('adie');
  h.style.backgroundColor= "#1b2631";
  paragraph.style.backgroundColor= "#283747";
  paragraph.style.color="#5d6d7e";

}