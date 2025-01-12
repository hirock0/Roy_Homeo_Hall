import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value || ""
    const { pathname } = request.nextUrl
    const publicPath = pathname === "/user/login" || pathname === "/user/register"
    const privatePath = pathname === "/home/categories/health_care"

    if (token === "" && privatePath) {
        const loginUrl = new URL('/user/login', request.nextUrl);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl)
    }
    if (token === "" && publicPath) {
        return NextResponse.next()
    }
    if (token !== "" && publicPath) {
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }
    if (token !== "" && privatePath) {
        return NextResponse.next()

    }

}





// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/user/register",
        "/user/login",
        "/home/categories/health_care",
    ],
}