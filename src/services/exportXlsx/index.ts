import api from "@/services/ApiClient";
import { ISearchAddresses } from "@/services/searchAddresses/types";

async function exportXlsx(data: { routes: ISearchAddresses[] }) {
  const response = await api
    .post("/export", data)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { exportXlsx };
