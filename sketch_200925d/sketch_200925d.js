let size = 10;

function setup() {
  createCanvas(500, 500);
  noFill();


  for(let i=0; i<40; i+=10){// repeating 4 times
    for(let j=0; j<100; j+=20){ // repeating 5 times -> total 20 times
     let size = int(random(1, 300));
      rect(i, j, size, size); 
    }           
  }
}


function draw() {

}
