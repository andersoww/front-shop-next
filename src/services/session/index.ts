import api from "@/services/ApiClient";

async function sessions(data: { email: string; password: string }) {
  const response = await api
    .post("/sessions", data)
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
}

export { sessions };
