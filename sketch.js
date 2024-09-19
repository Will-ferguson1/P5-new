
 let Random = "";
// colors array
let Colours = Array()
Colours[0] = "green";
Colours[1] = "red";
Colours[2] = "blue";
Colours[3] = "yellow";
Colours[4] = "purple";
Colours[5] = "pink";

console.log(Colours[1]);

let number = Math.floor(Math.random() * 6);
  
  console.log(number)
  if( number < 6 ){
   Random = Colours[number];
    console.log(Random);
  } 

function setup() {
  createCanvas(400, 400);

  //alert("random colour circle genarator / just testing");

  
  
 
}

function draw() {
  background(220);

  fill(Random);
  //console.log(Random)
  ellipse (200,200,100);

 

}

// this is a test this is a new test




