let position = 175;
let character = document.getElementById("character");

function moveLeft(){
    if(position > 0){
        position -= 25;
        character.style.left = position + "px";
    }
    console.log(position);
}
function moveRight(){
    if(position < 350){
        position += 25;
        character.style.left = position + "px";
    }
    console.log(position);
}