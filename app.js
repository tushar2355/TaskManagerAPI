
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectdb=require('./db/connect')
const notfound=require('./middleware/not-found')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)
app.use(notfound)
const port=3000;
const start=async()=>{
    try {
        await connectdb(process.env.MONGO_URI)

app.listen(port,()=>{
    console.log('Server is listening on port 3000');
})
    } catch (error) {
        console.log(error)
    }
}
start()