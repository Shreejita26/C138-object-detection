img="";
 status="";

function preload(){
    img=loadImage("#"); 
 }
 
 function setup(){
     canvas=createCanvas(640,420);
     canvas.center();
     objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
     document.getElementById("status").innerHTML="Status :Detecting Objects";
 
 }
 
 
 