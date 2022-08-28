status=""
objects=[]


function setup(){

canvas=createCanvas(380,380)
canvas.center()
video=createCapture(VIDEO)
video.hide()

}
function modelLoaded(){

console.log("Modal has Loaded")
status="true"

}

function start(){
   
    coco=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Detection Started ";
    
}


function gotResult(error,results){

    if(error){

console.log(error)

    }
    else{

console.log(results)
objects=results;
    }


}


function draw(){

image(video,0,0,380,380)
if(status != "")
{r=random(255);
    g=random(255);
    b=random(255);
    coco.detect(video,gotResult)
for(i=0;i< objects.length; i++)
{

document.getElementById("status").innerHTML="Objects Found";
document.getElementById("number").innerHTML="Number of Objects : "+objects.length;
p=floor(objects[i].confidence*100);
stroke(r,g,b)
text(objects[i].label + " " + p + " %" , objects[i].x+15,objects[i].y+15);
noFill()
stroke(r,g,b)
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);





}

}


}