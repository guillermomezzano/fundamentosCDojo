async function cargarData(event) {
  event.preventDefault();
  console.log("evento onsubmit");

  const url = "https://rickandmortyapi.com/api/character";
  const config = {
    method: "GET",
  };

  const response = await fetch(url, config);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const resultados = document.querySelector("#resultados");
  console.log(resultados);
  for (let i = 0; i < data.results.length; i++) {
    resultados.innerHTML =
      resultados.innerHTML +
      `<div>
    <img src="${data.results[i].image}"/>
    </div>`;
  }
}
