import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './Routes/crud.js'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000
app.use('/api',routes)
app.get('/',(req,res)=>{ 
    res.send("welcome, HARE KRISHNA")
})
const url=process.env.URL
mongoose.connect(url)
.then(() => app.listen(PORT))
.then(() => console.log(`db is connected and server is listening at ${PORT}`))
.catch((err) => console.log(err))
