let celsiusTemp = 0;
let farenheitTemp = 0;
let kelvinTemp = 0;

function convertCelsius(celsiusTemp){
    celsiusTemp = prompt("Enter temperature in degrees Celsius:");
    farenheitTemp = celsiusTemp * 9 / 5 + 32;
    kelvinTemp = 273.15 - -celsiusTemp;
    console.log("C: " + celsiusTemp);
    console.log("F: " + farenheitTemp);
    console.log("K: " + kelvinTemp);
    alert(`${Math.round(celsiusTemp)}° Celsius is equal to ${Math.round(farenheitTemp)}° Farenheit and ${Math.round(kelvinTemp)}° Kelvin.`);
}


function convertFarenheit(farenheitTemp){
    farenheitTemp = prompt("Enter temperature in degrees Farenheit:");
    celsiusTemp = (farenheitTemp - 32) * 5 / 9;
    kelvinTemp = 273.15 - -celsiusTemp;
    console.log("F: " + farenheitTemp);
    console.log("C: " + celsiusTemp);
    console.log("K: " + kelvinTemp);
    alert(`${Math.round(farenheitTemp)}° Farenheit is equal to ${Math.round(celsiusTemp)}° Celsius and ${Math.round(kelvinTemp)}° Kelvin.`);
}

function convertKelvin(kelvinTemp){
    kelvinTemp = prompt("Enter temperature in degrees Kelvin:");
    celsiusTemp = kelvinTemp - 273.15;
    farenheitTemp = celsiusTemp * 9 / 5 + 32;
    console.log("K: " + kelvinTemp);
    console.log("C: " + celsiusTemp);
    console.log("F: " + farenheitTemp);
    alert(`${Math.round(kelvinTemp)}° Kelvin is equal to ${Math.round(celsiusTemp)}° Celsius and ${Math.round(farenheitTemp)}° Farenheit.`);
}