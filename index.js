const express = require("express")
const add = require("./add")
app = express()
app.use(express.json())
app.get("/",(req, res)=> {
    return res.send("testing")
})

app.post("/add", (req, res) => {
    const {num1, num2} = req.body
    const sum = add(num1, num2)
    return res.send({sum})
})


const port = 3000
app.listen(port,async ()=>{
    
})
