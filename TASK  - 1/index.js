var vid = document.getElementById("vsrc");

var vid1 = document.getElementById("lvsrc");

var vid2 = document.getElementById("rvsrc");

var i=2;

vid.autoplay;
vid1.autoplay;
vid2.autoplay;

function myFunction1() { 
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/video1.mp4";
  } else {
    i=i+1;
    if(i==4){
      i=1;
    }
    vid.src = "videos/video"+i+".mp4";
    fixSwitch(i);
  }
  vid.load();
} 

function fixSwitch(val) {
  switch(val){
    case 1:
      vid1.src = "videos/video3.mp4";
      vid2.src = "videos/video2.mp4";
      break;
    case 2:
      vid1.src = "videos/video1.mp4";
      vid2.src = "videos/video3.mp4";
      break;
    case 3:
      vid1.src = "videos/video2.mp4";
      vid2.src = "videos/video1.mp4";
      break;
  }
}

function myFunction2() { 
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/video1.mp4";
  } else {
    i=i-1;
    if(i==0){
      i=3;
    }
    vid.src = "videos/video"+i+".mp4";
    fixSwitch(i);
  }
  vid.load();
} 


var doc = document.querySelectorAll(".single-team");


document.querySelectorAll('.single-team').forEach(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".img-content").style.display = "block";
  })
  item.addEventListener('mouseleave', function() {
    item.querySelector(".img-content").style.display = "none";
  })
})




document.querySelector(".itwo").addEventListener("click",myFunction1);


document.querySelector(".ione").addEventListener("click",myFunction2);


var a = 1;




document.querySelector(".rarrow").addEventListener("click",function(){
  j=a;
  document.querySelectorAll(".thumbnailbar img").forEach((item)=>{
    if((j+1)%8==0){
      item.src="images/exp"+8+".jpg";
    }
    else{
      item.src="images/exp"+(j+1)%8+".jpg";
    }
    j++;
  });
  var portSrc = document.querySelector("#img5").src;
  document.querySelector(".img-viewport img").src = portSrc;
  a+=1;
});


document.querySelector(".larrow").addEventListener("click",function(){
  j=a;
  document.querySelectorAll(".thumbnailbar img").forEach((item)=>{
    if((j-1)%8==0){
      item.src="images/exp"+8+".jpg";
    }
    else{
      item.src="images/exp"+(j-1)%8+".jpg";
    }
    j++;
  });
  var portSrc = document.querySelector("#img5").src;
  document.querySelector(".img-viewport img").src = portSrc;
  a+=1;
});

Extended = true ;
 
function OnScrollFunction()
{
  position = window.scrollY ;

  console.log( position )

  if( position > 139 && Extended != false )
  {
    console.log('Exe');
    var HeadBar = document.getElementById( 'container-1-content' );

    HeadBar.animate(

      [
        { height : '75%' , background : '#00000000' },
        { height : '10%' , background : '#000000AA'  }
      ],
      {
        duration : 500,
        iterations : 1,
        fill : "forwards"
      }      

    );

    Extended = false ;
  }
  else if( position < 25 && Extended == false )
  {

    
    var HeadBar = document.getElementById( 'container-1-content' );

    HeadBar.animate(

      [
        { height : '10%' , background : '#000000AA'},
        { height : '75%' , background : '#00000000'  }
      ],
      {
        duration : 500,
        iterations : 1,
        fill : "forwards"
      }      

    );

    Extended = true ;
  }
};

window.onscroll =  OnScrollFunction ;