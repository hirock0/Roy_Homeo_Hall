import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {

        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        })
        response.cookies.delete("token")
        return response

    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong",
            success: true
        })

    }
}