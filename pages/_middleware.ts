import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.Cookie_access_token;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
