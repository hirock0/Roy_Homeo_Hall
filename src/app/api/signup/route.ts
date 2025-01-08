import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        console.log(req)
        return NextResponse.json({
            message: "Data is found",
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: "Data not found", error,
            success: false
        })

    }
}
export async function POST(req:NextRequest,res){
    try {
        console.log(req)
        return NextResponse.json({
            message: "Data is found",
            success: true
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "Data not found", error,
            success: false
        })
        
    }
}