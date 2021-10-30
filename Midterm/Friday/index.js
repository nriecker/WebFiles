const images = ["draw.jpeg","podcast.jpeg","dance.jpeg","pinterest.jpeg"];

const title = ["Draw for 60 minutes", "Listen to a new podcast", "Dance alone for 20 minutes", "Use Pinterest for inspiration"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';

  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
