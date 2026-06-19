import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
// utnger
const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true ,
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.static("Pulic"))

app.use(cookieParser())

app.use(urlencoded({extended:true , limit : "16kb"}))



import userRouter from './routes/user.routes.js'
app.use("/api/v1/users" , userRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        message,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    })
})

export {app}