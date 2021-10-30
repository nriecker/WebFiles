const images = ["bath.jpeg","candle.jpeg","face.jpeg","nails.jpeg"];

const title = ["Take a hot & long bath", "Light candles all day", "Do a calming face mask", "Paint my nails"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
