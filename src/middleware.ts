// import { removeServerCookie } from "@utils/removeServerCookie";
import { isValidAuth } from "@/utils/isValidAuth";
import { removeServerCookie } from "@/utils/removeServerCookie";
import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const cookieToken = getCookie("token", { req: request, res: response });
  const returnAuth = NextResponse.redirect(new URL("/sign", request.url));

  if (cookieToken) {
    const token = await isValidAuth(request);

    if (!token) {
      removeServerCookie(returnAuth);
      return returnAuth;
    }

    return NextResponse.next();
  } else if (!cookieToken) {
    removeServerCookie(returnAuth);
    return returnAuth;
  }
}

export const config = {
  matcher: ["/", "/import", "/home"],
};
