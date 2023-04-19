const addModel = require("../schema/add.model")
const save = async function(data) {
    const {num1, num2, sum} = data
    const newEntry = new addModel({num1, num2, sum})
    await newEntry.save()
}

module.exports = save
