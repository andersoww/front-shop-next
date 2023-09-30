import { NextResponse } from "next/server";

function removeServerCookie(response: NextResponse) {
  response.cookies.delete("token");
}

export { removeServerCookie };
