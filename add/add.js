const save = require("../conroller/saveDb")
const add = function(num1, num2) {
    const sum = num1 + num2
    savePersistent({num1, num2, sum})
    return sum
}

const savePersistent = async function(data) {
    await save(data)
}

module.exports = add
