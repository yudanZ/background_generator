var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.getElementById("cssContent");
var body = document.getElementById("gradient");
var generate = document.getElementById("generate");



//console.log(color1);
//console.log(color2);
//console.log(css);

color1.addEventListener('input',  changeBackground);

color2.addEventListener('input', changeBackground);

function changeBackground(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " +  color2.value + ")";

    css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    return Math.random().toString(16).substring(2,8);
}

//console.log(generateRandomColor());

function setBackground(){
    var newColor1 = "#" + generateRandomColor();
    var newColor2 = "#" + generateRandomColor();

    body.style.background = "linear-gradient(to right," + newColor1 + ", " +  newColor2 + ")";
    color1.value = newColor1;
    color2.value = newColor2;

    css.textContent = body.style.background + ";";

}

generate.addEventListener('click', setBackground);