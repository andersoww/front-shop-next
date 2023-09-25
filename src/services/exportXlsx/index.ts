import axios from "axios";

async function exportXlsx(file: any) {
  const response = await axios
    .post("http://0.0.0.0:3333", file)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { exportXlsx };
