import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { cookie } from "express/lib/response"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true ,
}))

app.use(express.json({
    limit: "10kb"
}))

app.use(express.static("Pulic"))

app.use(cookieParser())

app.use(urlencoded({extended:true , limit : "12kb"}))
export {app}