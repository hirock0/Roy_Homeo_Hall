import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({
            message: "Data got it"
        })
    } catch (error) {
        return NextResponse.json({
            message: "Data got it", error
        })

    }
}