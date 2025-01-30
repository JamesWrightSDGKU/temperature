function convertTemp(){
    var inputScale = document.querySelector("input[name=scale]:checked").value;
    var inputTemp = Number(document.getElementById("inputTemperature").value);
    var outputTemp = 0;
    if(inputScale == "Farenheit"){
        outputTemp = (inputTemp - 32) * 5 / 9;
        console.log(`${inputTemp}° ${inputScale} is equal to ${outputTemp}° Celsius.`);
        document.getElementById("results").innerHTML=`${inputTemp}° ${inputScale} is equal to ${outputTemp}° Celsius.`;
    }else{
        outputTemp = inputTemp * 9 / 5 + 32;
        console.log(`${inputTemp}° ${inputScale} is equal to ${outputTemp}° Farenheit.`);
        document.getElementById("results").innerHTML=`${inputTemp}° ${inputScale} is equal to ${outputTemp}° Celsius.`;
    }
}

