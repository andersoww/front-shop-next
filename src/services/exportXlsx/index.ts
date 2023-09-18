import axios from "axios";

async function exportXlsx(file: any) {
  const response = await axios
    .post("https://api-export-shop.onrender.com", file)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { exportXlsx };
