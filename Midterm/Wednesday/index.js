const images = ["hike2.jpeg","clouds.jpeg","picnic.jpeg","sunset.png"];

const title = ["Go for a local hike", "Watch the clouds", "Eat lunch outside", "Find a spot to watch the sunset"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
