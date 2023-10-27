const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Jedziemy")
})

app.use("/api/v1/tasks", tasks)

const port = 5050

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Serwer działa na porcie ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
