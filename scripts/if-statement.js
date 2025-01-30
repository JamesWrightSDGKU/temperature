// console.log("Conditionals");

// let student1 = 45;
// let student2 = 45;

// if(student1 == student2){
//     console.log("The values are the same");
// }

// let isTrue = false;

// if(isTrue){
//     console.log("Yes");
// }else{
//     console.log("No");
// }


// Challenge 1
// let age = 0;
// age = prompt("What is your age?");

// if(age < 13){
//     console.log("You are a child.");
// }else if(age < 21){
//     console.log("You are a teenager.");
// }else if(age < 64){
//     console.log("You are an adult.");
// }
// else{
//     console.log("You are a senior.");
// }

// // Challenge 2
// let ticketCost = 10;

// function chargeTicket(age){
//     if(age < 12){
//         ticketCost = 5;
//     }else if(age < 18){
//         ticketCost = 8;
//     }else{
//         ticketCost = 10;
//     }
//     document.getElementById("results").innerHTML=`The ticket costs $${ticketCost}.`;
// }

// chargeTicket();

// Challenge 3

function whatToWear(){
    let temperature = 0;
    let top;    
    temperature = prompt("What is the temperature in degrees Celsius?");
    const p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    if(temperature < 15){
        p.classList.add("cold");
        top = "jacket";
    }else if(temperature < 25){
        p.classList.add("perfect");
        top = "sweater";
    }else{
        p.classList.add("hot");
        top = "t-shirt";
    }
    
    document.getElementById("weather").innerHTML=`We think you'll be most comfortable wearing a ${top}.`;
}