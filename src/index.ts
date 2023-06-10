import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import moviesRouter from './Routes/movies';

//initializations
const PORT = 3000;
dotenv.config()
const DB_URI: string = process.env.DB_URI || `mongodb+srv://localhost:${PORT}/defaultdatabase`
const app = express()




//Middleware
app.use(express.json())


app.get('/ping',(_req,res)=>{
    console.log('someone pinged here!!')
    res.send('pong')
})

app.get('/',(_req,res)=>{
    res.json({message: 'Welcome'})
})

app.use('/movies',moviesRouter)


mongoose.connect(DB_URI);
console.log('Database connected')


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})