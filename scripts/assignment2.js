let celsiusTemp = 0;
let farenheitTemp = 0;
let kelvinTemp = 0;

function convertCelsius(celsiusTemp){
    celsiusTemp = Number(prompt("Enter temperature in degrees Celsius:"));
    farenheitTemp = celsiusTemp * 9 / 5 + 32;
    kelvinTemp = 273.15 + celsiusTemp;
    console.log("C: " + celsiusTemp);
    console.log("F: " + farenheitTemp);
    console.log("K: " + kelvinTemp);
    document.getElementById("result").innerHTML=`<p>${Math.round(celsiusTemp)}° Celsius is equal to ${Math.round(farenheitTemp)}° Farenheit and ${Math.round(kelvinTemp)}° Kelvin.</p>`;
}

function convertFarenheit(farenheitTemp){
    farenheitTemp = Number(prompt("Enter temperature in degrees Farenheit:"));
    celsiusTemp = (farenheitTemp - 32) * 5 / 9;
    kelvinTemp = 273.15 + celsiusTemp;
    console.log("F: " + farenheitTemp);
    console.log("C: " + celsiusTemp);
    console.log("K: " + kelvinTemp);
    document.getElementById("result").innerHTML=`${Math.round(farenheitTemp)}° Farenheit is equal to ${Math.round(celsiusTemp)}° Celsius and ${Math.round(kelvinTemp)}° Kelvin.`;
}

function convertKelvin(kelvinTemp){
    kelvinTemp = Number(prompt("Enter temperature in degrees Kelvin:"));
    celsiusTemp = kelvinTemp - 273.15;
    farenheitTemp = celsiusTemp * 9 / 5 + 32;
    console.log("K: " + kelvinTemp);
    console.log("C: " + celsiusTemp);
    console.log("F: " + farenheitTemp);
    document.getElementById("result").innerHTML=`${Math.round(kelvinTemp)}° Kelvin is equal to ${Math.round(celsiusTemp)}° Celsius and ${Math.round(farenheitTemp)}° Farenheit.`;
}