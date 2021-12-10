document.getElementById("picbutton").addEventListener("click", buttonClicked);

  const photoArray = ["assets/pic1.png", "assets/pic2.png" , "assets/pic3.png" , "assets/pic4.png" , "assets/pic5.png", "assets/pic6.png" , "assets/pic7.png" , "assets/pic8.png"];
    let piccount = 0;

  function buttonClicked(){
    console.log(pics[piccount]);
    document.getElementById("ropic").src = photoArray[piccount];
    if(piccount>=7){
      piccount = 0;
    }else{
      piccount++;
    }
  }

  document.getElementById("picbutton2").addEventListener("click", buttonClicked);

    const photoArrays = ["assets/pic1.png", "assets/pic2.png" , "assets/pic3.png" , "assets/pic4.png" , "assets/pic5.png", "assets/pic6.png" , "assets/pic7.png" , "assets/pic8.png"];
      let piccounts = 0;

    function buttonClicked(){
      console.log(pics[piccounts]);
      document.getElementById("ropic2").src = photoArrays[piccounts];
      if(piccounts>=7){
        piccounts = 0;
      }else{
        piccounts++;
      }
    }
