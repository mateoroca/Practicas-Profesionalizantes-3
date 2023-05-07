const proccesData = require("./proccesData.js");

function getAverage(data) {
  let sum = data.reduce((total, value) => total + value, 0);

  let average = sum / data.length;
  return average.toFixed(2);
}

let allData = [
  proccesData.dataDaysOfPrecipitations,
  proccesData.dataPresipitations,
  proccesData.dataRelativeHumidity,
  proccesData.dataSunnyHours,
  proccesData.dataTempMaxAbs,
  proccesData.dataTempMaxMedia,
  proccesData.dataTempMedia,
  proccesData.dataTempMinAbs,
  proccesData.dataTempMinMedia,
];

const allAverages = allData.map((items) => {
  let values = [];

  const value = getAverage(items);
  values.push(value);
  return values;
});

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}

const allAveragesOnFahrenheit = allAverages.map((items) => {
  let values = [];
  const value = celsiusToFahrenheit(items);
  values.push(value);
  return values;
});

console.log(allAverages);
console.log(allAveragesOnFahrenheit);
