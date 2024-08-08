import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

const noNeedProcessRoute = [".*\\.png", ".*\\.jpg", ".*\\.opengraph-image.png"];

const noRedirectRoute = ["/api(.*)", "/trpc(.*)", "/admin"];

const publicRoute = [
  "/signin(.*)",
  "/terms(.*)",
  "/privacy(.*)",
  "/docs(.*)",
  "/blog(.*)",
  "/pricing(.*)",
];

function isNoRedirect(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noRedirectRoute.some((route) => new RegExp(route).test(pathname));
}

function isPublicPage(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return publicRoute.some((route) => new RegExp(route).test(pathname));
}

function isNoNeedProcess(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noNeedProcessRoute.some((route) => new RegExp(route).test(pathname));
}

/**
 * 1. If the request is public page, allow it.
 * 2. If the request is not public page, check if the user is authenticated.
 * @param request
 * @returns
 */
export default async function middleware(request: NextRequest) {
  if (isNoNeedProcess(request)) {
    return null;
  }

  const isWebhooksRoute = /^\/api\/webhooks\//.test(request.nextUrl.pathname);
  if (isWebhooksRoute) {
    return NextResponse.next();
  }

  if (isPublicPage(request)) {
    return null;
  }

  return authMiddleware(request);
}

const authMiddleware = withAuth(
  async function middlewares(req) {
    const token = await getToken({ req });
    const isAuth = !!token;
    const isAdmin = token?.isAdmin;
    const isAuthPage = /^\/(login|register)/.test(req.nextUrl.pathname);
    const isAuthRoute = /^\/api\/trpc\//.test(req.nextUrl.pathname);

    if (isAuthRoute && isAuth) {
      return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith("/admin/dashboard")) {
      if (!isAuth || !isAdmin)
        return NextResponse.redirect(new URL(`/admin/login`, req.url));
      return NextResponse.next();
    }

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL(`/dashboard`, req.url));
      }
      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }
      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url),
      );
    }
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};