const express = require('express')
const app= express()
const port = process.env.PORT || '4000'
const connectDb = require('./db/connectDb.js')
const web = require('./routes/web.js')
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'


connectDb(DATABASE_URL)

app.set('view engine', 'ejs')

// use this middle ware to avoid error 

app.use(express.urlencoded({extended:true}))


app.use('/',web)
app.listen(port,()=>{
    console.log('server started')
})