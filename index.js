import express from "express"
import cors from "cors"
import router from "./routes/index.js"

const app = express()
app.listen(5100, () => {
    console.log("Server running on port 5100");
})

app.use(cors())
app.use(express.json())
app.use(router)