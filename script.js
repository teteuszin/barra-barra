//declarando a variavel x 
let x = 300
//declarando a variavel y
let y = 200
//declarando a variavel tamanhodabolinha
let tamanhodabolinha = 40;
//declarando a variavel v
let v = 5;
  
let raio = tamanhodabolinha / 2;


function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    
    circle(x,y,tamanhodabolinha);
    

 x += v;


if(x + raio >width || x - raio <0 ){

    v *= -1;

}
 

  }