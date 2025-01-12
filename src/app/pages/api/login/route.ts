import { loggedUserDB } from "@/lib/models/schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { DBConnection } from "@/utils/dbConnection/dbConnection";
import jwt from "jsonwebtoken"
export async function POST(request: NextRequest) {
    await DBConnection()
    try {
        const { email, password } = await request.json()

        const findUser = await loggedUserDB.findOne({ email: email })
        if (findUser) {
            const verifyPassword = await bcrypt.compare(password, findUser?.password)
            if (verifyPassword) {
                const tokenData = {
                    id: findUser?._id,
                    email: findUser?.email,
                    name: findUser?.name
                }
                const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
                const response = NextResponse.json({
                    message: "Login successfully",
                    success: true
                }, { status: 200 })
                response.cookies.set("token", token, { httpOnly: true })
                return response
            } else {
                return NextResponse.json({
                    message: "Password not correct",
                    success: false
                })
            }
        } else {
            return NextResponse.json({
                message: "Email not correct",
                success: false
            })
        }


    } catch (error) {
        return NextResponse.json({
            message: error,
            sucess: false
        })

    }
}