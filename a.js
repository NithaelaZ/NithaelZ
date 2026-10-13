

const about = ["Character designiner", "Digital artist.", "2D concept artist.", "Feminine VA.", "HTML, CSS, and JavaScript web developer.", "Godot and Unity programmer."];
let aLen = about.length;

let text = "<br> <br> <b>Junior</b> character designer and enviroment artist, junior QA tester for PC games, junior level designer, Unity, Godot, ClipStudio, Krita, open for work and internships<br><ul>";
for (let i = 0; i < aLen; i++) 
  {
  text += "<li>" + about[i] + "</li>";
}
text += "</ul><br> ";

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