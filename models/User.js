const mongoose = require("mongoose");
const { boolean } = require("wbidl-converstions")
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true

        },
        email: {
            type: String,
            required: true,
            unique: true

        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: boolean,
            default: false
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model(user, UserSchema);