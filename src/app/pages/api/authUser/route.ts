import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || ""
        if (token === "") {
            return NextResponse.json({
                message: "Unauthorized user",
                success: false,
            })
        } else {
            const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET!)
            return NextResponse.json({
                message: "Authorized",
                success: true,
                verifiedToken
            })
        }
    }
    catch (error) {
        return NextResponse.json({
            message: "Unauthorized Token",
            success: false
        })
    }
}