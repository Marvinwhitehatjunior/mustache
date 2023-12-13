nosex=0;
nosey=0;







function preload(){
  mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
  
}

function draw(){
    image(video,0,0,400,300);
    image(mustache,nosex,nosey,45,45);
}


function gotPoses(results){
    if(results.length>0){
      console.log(results);
      console.log("nosex="+results[0].pose.nose.x);
      console.log("nosey="+results[0].pose.nose.y);
      nosex=results[0].pose.nose.x-23;
      nosey=results[0].pose.nose.y;
    }
    
  }



  function modelLoaded(){
    console.log("modelLoaded");
  }


 function take_snapshot(){
   save("mustache.png");
 }