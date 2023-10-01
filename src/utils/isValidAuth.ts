import { getCookie } from "cookies-next";
import { NextRequest } from "next/server";

async function isValidAuth(req: NextRequest): Promise<boolean> {
  const token = getCookie("token", { req });

  const getToken = await fetch(`${process.env.BASE_URL}/sessions/validate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => err.response);

  if (!token || getToken?.statusCode === 400) {
    return false;
  }
  return true;
}

export { isValidAuth };
