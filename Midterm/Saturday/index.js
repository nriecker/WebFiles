const images = ["cat.jpeg","movie.jpg","sushi.jpeg","wine.png"];

const title = ["Play with my cat", "Watch a movie", "Order take out", "Have a glass of wine"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';

  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
