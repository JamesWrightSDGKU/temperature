// let numRows = 10;
// const m = 2;

// for (let i=1; i<=numRows; i++){
//     document.write(`<p>${m} x ${i} = ${m*i}</p>`)
// }
// Challenge 1

function multTable(){
    let num = Number(prompt("Please enter a number:"));
    let result = 0;
    document.write(`<h3>Table of ${num}</h3>`);
    for (let i=0; i<=10; i++){
        result = num * i;
        document.write(`<p>${num} x ${i} = ${result}</p>`);
    }
}

// Challenge 2

function numberList(){
    for(let i=1; i<=100; i++){
        if(i==50){
            document.write(`I found it! `);
        }else{
            document.write(`${i}, `);
        }
    }
}

// Arrays

let myArray = [3,2,4,5,0];
let myArray2 = ["Samantha",true,10.6,7];

console.log(myArray[3]);
console.table(myArray2);

myArray2[0] = "James";
console.table(myArray2);

let students = ["James","Cassius","Ed","Joseph","Gabriel","Robert","Roland","Justin","Kyle","Koiree"];
let ages = [30,32,43,43,25,19,23,34,26,35];

for(let i=0;i<students.length;i++){
    document.getElementById("studentList").innerHTML+=`
    <div class="student">
        <p>${students[i]}</p>
        <p>${ages[i]}</p>
    </div>`;
}

