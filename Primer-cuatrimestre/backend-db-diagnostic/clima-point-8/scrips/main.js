const arrayOfClimaticParametersMDQ = {
  tempMaxAbs: [
    42.4, 38.1, 36.3, 32.5, 27.4, 22.2, 27.5, 24.7, 28.8, 34.4, 35.7, 39.4,
    39.4,
  ],

  temperaturaMaxMedia: [
    26.3, 25.6, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16.0, 18.5, 21.7, 24.4,
    19.6,
  ],

  tempMedia: [
    20.3, 19.9, 18.0, 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5, 14.0,
  ],

  tempMinMedia: [
    14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7, 8.7,
  ],

  tempMinAbs: [
    4.7, 1.2, 1.9, -1.0, -3.0, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2, -9.3,
  ],

  precipitation: [
    100.1, 72.8, 107.0, 73.3, 73.5, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0,
    923.6,
  ],

  daysOfPrecipitations: [9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10, 107],

  sunnyHours: [
    288.3, 234.5, 232.5, 195.0, 167.4, 120.0, 127.1, 164.3, 174.0, 210.8, 222.0,
    269.7, 2405.6,
  ],

  relativeHumidity: [76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76, 80],
};

const butonShowWeather = document.getElementById("btnShowWeather");

butonShowWeather.addEventListener("click", () => {
  butonShowWeather.style.display = "none";
  let tabla = document.createElement("table");

  // Crear la primera fila (encabezados)
  let thTitle = document.createElement("th");
  thTitle.setAttribute("colspan", "14");
  thTitle.textContent = "Parametros climaticos de Mar del Plata,BA(1961-1990)";
  tabla.appendChild(thTitle);
  let filaEncabezados = document.createElement("tr");

  // Crear los encabezados
  let encabezados = [
    "Parametros",
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
    "Anual",
  ];
  encabezados.forEach((data) => {
    let th = document.createElement("th");
    th.textContent = data;
    filaEncabezados.appendChild(th);
  });

  // Agregar la fila de encabezados a la tabla
  tabla.appendChild(filaEncabezados);

  // Crear las filas de datos utilizando los valores del objeto

  for (let key in arrayOfClimaticParametersMDQ) {
    let filaDatos = document.createElement("tr");

    // Crear la celda del nombre de los datos
    let thNombreDato = document.createElement("th");
    thNombreDato.textContent = key;
    filaDatos.appendChild(thNombreDato);

    // Crear las celdas de los valores
    for (let j = 0; j < arrayOfClimaticParametersMDQ[key].length; j++) {
      let tdValor = document.createElement("td");
      tdValor.className = key;
      tdValor.textContent = arrayOfClimaticParametersMDQ[key][j];
      setColor(key, tdValor, arrayOfClimaticParametersMDQ[key][j]);
      filaDatos.appendChild(tdValor);
    }

    // Agregar la fila de datos a la tabla
    tabla.appendChild(filaDatos);
  }

  // Agregar la tabla al documento HTML
  let contenedorTabla = document.querySelector(".contenedorTabla");
  contenedorTabla.appendChild(tabla);
});

function setColor(className, td, tdTextContent) {
  if (
    className == "tempMaxAbs" ||
    className == "temperaturaMaxMedia" ||
    className == "tempMedia" ||
    className == "tempMinMedia" ||
    className == "tempMinAbs"
  ) {
    let value = parseInt(tdTextContent);
    if (value > 30) {
      td.style.backgroundColor = "red";
    } else if (value > 20) {
      td.style.backgroundColor = "orange";
    } else if (value > 10) {
      td.style.backgroundColor = "yellow";
    } else if (value > 0) {
      td.style.backgroundColor = "skyblue";
    } else if (value > -5) {
      td.style.backgroundColor = "cyan";
    } else if (value > -10) {
      td.style.backgroundColor = "dodgerblue";
    }
  }

  if (className == "precipitation") {
    let value = parseInt(tdTextContent);
    if (value > 99) {
      td.style.backgroundColor = "slateblue";
    } else if (value > 75) {
      td.style.backgroundColor = "mediumorchid";
    } else if (value > 55) {
      td.style.backgroundColor = "mediumpurple";
    } else {
      td.style.backgroundColor = "thistle";
    }
  }

  if (className == "daysOfPrecipitations") {
    let value = parseInt(tdTextContent);
    if (value >= 10) {
      td.style.backgroundColor = "royalblue";
    } else if (value > 5) {
      td.style.backgroundColor = "lightskyblue";
    }
  }

  if (className == "sunnyHours") {
    let value = parseInt(tdTextContent);
    if (value >= 200) {
      td.style.backgroundColor = "gold";
    } else if (value >= 100) {
      td.style.backgroundColor = "yellow";
    }
  }
  if (className == "relativeHumidity") {
    let value = parseInt(tdTextContent);
    if (value >= 70) {
      td.style.backgroundColor = "blue";
    }
  }
}
