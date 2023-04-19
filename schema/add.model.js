const { mongoose } = require("mongoose")
const schema = mongoose.Schema
const add = new schema({
    num1: {
        type: Number, 
        default: 0
    },
    num2: {
        type: Number,
        default: 0
    },
    sum: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("add", add)
