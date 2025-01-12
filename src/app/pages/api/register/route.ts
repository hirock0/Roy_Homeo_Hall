import { NextRequest, NextResponse } from "next/server"
import { DBConnection } from "@/utils/dbConnection/dbConnection"
import { loggedUserDB } from "@/lib/models/schema"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export async function POST(request: NextRequest) {
    await DBConnection()
    try {
        const reqBody = await request.json()
        const { name,
            email,
            password,
            confirmPassword } = reqBody
        const hasedPassword = await bcrypt.hash(password, 10)
        const preSaveData = await new loggedUserDB({
            name,
            email,
            password: hasedPassword,
            confirmPassword
        })
        const savedUser = await preSaveData.save()
        const tokenData = {
            id: savedUser?._id,
            name: savedUser?.name,
            email: savedUser?.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({
            message: "Login successfully", success: true
        }, { status: 200 })
        response.cookies.set("token", token, { httpOnly: true })
        return response

    } catch (error) {
        return NextResponse.json({
            message: "Email Already used", error,
            success: false
        })

    }
}

