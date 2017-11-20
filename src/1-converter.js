function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function formatCelsius(a) {
  return (Math.round(a) + '°C')
}

function formatFahrenheit(a) {
  return (Math.round(a) + '°F')
}

let hottestTemperature = [75, 99, 56, 75]

// Monday

// const mondayTemperature = 24
// console.log(`On Monday it is ${mondayTemperature}°C`)
// fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
// console.log(`The Americans would think of that as ${fahrenheit}°F`)

const mondayTemperature = 75
console.log(`On Monday it is ${mondayTemperature}°f`)
celsius = formatCelsius(convertFahrenheitToCelsius(mondayTemperature))
console.log (`The Aussies would think of that as ${celsius}`)
console.log(`And the highest temperature will be: ${ Math.max(...hottestTemperature) + '°' }`)
// Tuesday


// const tuesdayTemperature = 31
// console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
// fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
// console.log(`The Americans would think of that as ${fahrenheit}°F`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/
