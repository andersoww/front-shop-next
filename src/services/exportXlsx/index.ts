import axios from "axios";

async function exportXlsx(file: any) {
  const response = await axios
    .post("https://api-export-shop.onrender.com", file)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}
async function pokemonApi() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .catch((err) => err.response);

  return response;
}

export { exportXlsx, pokemonApi };
