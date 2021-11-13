const images = ["friends.jpg","brynn.jpg","coco.jpg","fishing.jpg","jack.jpg","winnie.jpg","family.jpg","sean.jpg"];

for(i=0;i<document.getElementsByClassName('pictures').length;i++){

  document.getElementsByClassName("pictures")[i].innerHTML += '<img src="assets/pictures/' + images[i] + ' "> ';
  //set the id of each section
