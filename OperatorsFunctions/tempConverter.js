function convertCelsiusToKelvin(tempCelsius){
//K = C + 273.15
let TempKelvin = tempCelsius + 273.15
return TempKelvin;
}

function convertFahrenheitToKelvin(tempFahrenheit){
//K=(5/9)(F+459.67)
let TempKelvin = (tempFahrenheit + 459.67) * 5 / 9
return TempKelvin;
}


console.log(convertFahrenheitToKelvin(100))