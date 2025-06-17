// /src/middleware.ts atau /middleware.ts
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

const adminOnlyRoutes = ["/admin"]

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = req.nextUrl

  if (adminOnlyRoutes.some(route => pathname.startsWith(route))) {
    if (!token || token.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
  }

  return NextResponse.next()
}

// Konfigurasi matcher jika ingin lebih eksplisit
export const config = {
  matcher: ["/admin/:path*"],
}
