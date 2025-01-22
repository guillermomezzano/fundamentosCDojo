async function cargarData(event) {
  event.preventDefault();
  console.log("evento onsubmit");

  // https://rickandmortyapi.com/api/character/2
  const idPersonaje = document.querySelector("#idPersonaje").value;
  const url = `https://rickandmortyapi.com/api/character/${idPersonaje}`;
  const config = {
    method: "GET",
  };

  const response = await fetch(url, config);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const resultados = document.querySelector("#resultados");
  console.dir(resultados);
  // for (let i = 0; i < data.results.length; i++) {
  //   resultados.innerHTML =
  //     resultados.innerHTML +
  //     `<div>
  //   <img src="${data.results[i].image}"/>
  //   </div>`;
  // }
  resultados.innerHTML = "";
  resultados.innerHTML =
    resultados.innerHTML +
    `<div>
      <h1>${data.name}</h1>
      <img src="${data.image}"/>
    </div>`;

  try {
  } catch (error) {}
}

async function cargarDataAxios(event) {
  event.preventDefault();
  console.log("evento onsubmit");

  const idPersonaje = document.querySelector("#idPersonaje").value;
  const url = `https://rickandmortyapi.com/api/characte/${idPersonaje}`;

  try {
    const response = await axios.get(url);
    console.log(response);

    const resultados = document.querySelector("#resultados");
    console.dir(resultados);

    resultados.innerHTML = "";
    resultados.innerHTML =
      resultados.innerHTML +
      `<div>
        <h1>${response.data.name}</h1>
        <img src="${response.data.image}"/>
      </div>`;
  } catch (error) {
    const resultados = document.querySelector("#resultados");
    console.log(error.message);
    resultados.innerHTML = "";
    resultados.innerHTML =
      resultados.innerHTML +
      `<div>
        <h1>${error.message}</h1>
      </div>`;
  }
}
