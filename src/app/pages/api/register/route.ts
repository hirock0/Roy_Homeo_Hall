import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        return NextResponse.json({
            message: reqBody, success: true
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            message: "Data not found", error,
            success: false
        })

    }
}