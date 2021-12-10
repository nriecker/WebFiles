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

  document.getElementById("picbutton2").addEventListener("click", buttonClick);

    const photoArrays = ["assets/pic9.jpeg", "assets/pic10.jpeg" , "assets/pic11.jpeg" , "assets/pic12.jpeg" , "assets/pic13.jpeg", "assets/pic14.jpeg" , "assets/pic15.jpeg" , "assets/pic16.jpeg"];
      let piccounts = 0;

    function buttonClick(){
      console.log(pics[piccounts]);
      document.getElementById("ropic2").src = photoArrays[piccounts];
      if(piccounts>=7){
        piccounts = 0;
      }else{
        piccounts++;
      }
    }
