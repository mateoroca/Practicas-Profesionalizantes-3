const database = require("./database.js");

let dataPresipitations = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let precipitations = data.precipitation;
    let values = [];

    for (const key in precipitations) {
      const value = precipitations[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataTempMaxAbs = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataTempMaxAbs = data.tempMaxAbs;
    let values = [];

    for (const key in dataTempMaxAbs) {
      const value = dataTempMaxAbs[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataTempMaxMedia = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataTempMaxMedia = data.temperaturaMaxMedia;
    let values = [];

    for (const key in dataTempMaxMedia) {
      const value = dataTempMaxMedia[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataTempMedia = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataTempMedia = data.tempMedia;
    let values = [];

    for (const key in dataTempMedia) {
      const value = dataTempMedia[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataTempMinMedia = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataTempMinMedia = data.tempMinMedia;
    let values = [];

    for (const key in dataTempMinMedia) {
      const value = dataTempMinMedia[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataTempMinAbs = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataTempMinAbs = data.tempMinAbs;
    let values = [];

    for (const key in dataTempMinAbs) {
      const value = dataTempMinAbs[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataDaysOfPrecipitations = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataDaysOfPrecipitations = data.daysOfPrecipitations;
    let values = [];

    for (const key in dataDaysOfPrecipitations) {
      const value = dataDaysOfPrecipitations[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataSunnyHours = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataSunnyHours = data.sunnyHours;
    let values = [];

    for (const key in dataSunnyHours) {
      const value = dataSunnyHours[key];
      values.push(value);
    }
    return values;
  })
  .flat();

let dataRelativeHumidity = database.arrayOfClimaticParametersMDQ
  .map((data) => {
    let dataRelativeHumidity = data.relativeHumidity;
    let values = [];

    for (const key in dataRelativeHumidity) {
      const value = dataRelativeHumidity[key];
      values.push(value);
    }
    return values;
  })
  .flat();

module.exports = {
  dataPresipitations: dataPresipitations,
  dataTempMaxAbs: dataTempMaxAbs,
  dataTempMaxMedia: dataTempMaxMedia,
  dataTempMedia: dataTempMedia,
  dataTempMinMedia: dataTempMinMedia,
  dataTempMinAbs: dataTempMinAbs,
  dataDaysOfPrecipitations: dataDaysOfPrecipitations,
  dataSunnyHours: dataSunnyHours,
  dataRelativeHumidity: dataRelativeHumidity,
};
