const { home, Schema } = require('mongoose');

const homeSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    }
})
module.exports=home('home',homeSchema);