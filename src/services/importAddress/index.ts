import api from "@/services/ApiClient";

async function importAddress(file: any) {
  const response = await api
    .post("/importAddress", file)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}
export { importAddress };
