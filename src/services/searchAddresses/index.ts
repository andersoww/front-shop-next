import api from "@/services/ApiClient";
import { ISearchAddresses } from "@/services/searchAddresses/types";

async function searchRouteAddresses(data: { routes: ISearchAddresses[] }) {
  const response = await api
    .post("/importAddress/search/asda", data)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { searchRouteAddresses };
