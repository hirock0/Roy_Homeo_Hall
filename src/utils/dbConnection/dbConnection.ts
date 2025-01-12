import mongoose from "mongoose";
let isConnected = false
export const DBConnection = async () => {
    if (isConnected) {
        console.log("Already connected to database")
        return
    }
    const connection = await mongoose.connections
    if (connection.length > 0) {
        const existingConnection = mongoose.connections[0].readyState
        if (existingConnection === 1) {
            console.log("Using existing database connection.")
            isConnected = true
            return

        }
        await mongoose.disconnect()
    }

    const mongoUri = process.env.MONGODB_URI
    if (!mongoUri) {
        throw new Error("Please define the MONGODB_URI from env file")
    }
    const db = await mongoose.connect(mongoUri)
    isConnected = db.connections[0].readyState === 1;
    console.log("Database connected successfully")

}