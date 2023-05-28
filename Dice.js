function run(){
var num1=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice"+num1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var num2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+num2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="---->DRAW<----";
}
}