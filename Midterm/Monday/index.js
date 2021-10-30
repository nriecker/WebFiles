const images = ["homework.jpeg","Weight.jpeg","laundry.jpeg","cardio.jpeg"];

const title = ["2 hours of future homework",
"60 minutes of weight training","Clean room & do laundry","Cardio for 30 minutes"];

for(i=0;i<document.getElementsByClassName('things').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("things")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("things")[i].setAttribute("id", title[i]);
}

document.getElementById("return").onclick = function () {
        location.href = "../index.html";
    }
