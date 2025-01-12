import mongoose from "mongoose"
const LoggedUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ["admin", "user", "moderator"],
        default: "user"
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }

},
    {
        timestamps: true
    }

)

export const loggedUserDB = mongoose.models.logged_users || mongoose.model("logged_users", LoggedUserSchema)
