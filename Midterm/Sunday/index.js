const images = ["smoothie.jpeg","flowers.jpeg","tea.jpeg","sleep.jpeg"];

const title = ["Make a health food smoothie", "Buy fresh flowers", "Have a hot cup of green tea", "Get a good night’s sleep"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';

  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
