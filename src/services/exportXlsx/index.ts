import api from "@/services/ApiClient";

async function exportXlsx(file: any) {
  const response = await api
    .post("/", file)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { exportXlsx };
