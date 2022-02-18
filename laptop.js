img = "";
status1="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects....";
}
function preload(){
  img = loadImage('mobile and laptop.jpg');
}
function draw() {
    image(img, 0, 0, 600, 500);
    text("Laptop and Mobile", 45, 75);
    stroke("#FF0000");
    noFill();
    rect(30, 60, 550, 450 );
}  
function back(){
    window.location="index.html";
}
function modelloaded(){
    console.log("Your model is successfully loaded");
    status1=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log("Error");
    }
    else{
        console.log(results);
    }
}