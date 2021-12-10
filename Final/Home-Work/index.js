const images = ["sunday.png","me.png"];

const title = ["Midterm excerpt: Sunday/Rest day", "Hello Me assignment"];

for(i=0;i<document.getElementsByClassName('code').length;i++){
  document.getElementsByClassName('description')[i].innerHTML = title[i];

  document.getElementsByClassName("code")[i].innerHTML += '<img src="assets/code/' + images[i] + ' "> ';

  document.getElementsByClassName("code")[i].setAttribute("id", title[i]);
}

const image = ["bc.png","midterm.png"];

const titles = ["Breakfast Club Quote Generator", "Self Care Midterm Home Page"];

for(i=0;i<document.getElementsByClassName('code2').length;i++){
  document.getElementsByClassName('description2')[i].innerHTML = titles[i];

  document.getElementsByClassName("code2")[i].innerHTML += '<img src="assets/code2/' + image[i] + ' "> ';

  document.getElementsByClassName("code2")[i].setAttribute("id", titles[i]);
}
