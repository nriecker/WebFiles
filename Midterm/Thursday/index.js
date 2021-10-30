const images = ["music.png","meditate.jpeg","journal.jpeg","dessert.jpeg"];

const title = ["Listen to music", "Meditate somewhere quiet", "Journal for 30 minutes", "Bake a yummy dessert"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
