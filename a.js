

const about = ["Character designiner and 2D concept artist.", "Feminine VA.", "HTML, CSS, and JavaScript web developer.", "Non-binary."];
let aLen = about.length;

let text = "<ul>";
for (let i = 0; i < aLen; i++) 
  {
  text += "<li>" + about[i] + "</li>";
}
text += "</ul>";

document.getElementById("about").innerHTML = text;


const Languages = [" Polish - Native "," English - B2 "];

let langl = Languages.length;

let t = "<ul>";
for (let i = 0; i < langl; i++) 
  {
  t += "<li>" + Languages[i] + "</li>";
}
t += "</ul>";

document.getElementById("Languages").innerHTML = t;