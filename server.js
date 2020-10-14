 require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const colors = require('colors');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db.js');

const app = express();
const transactions = require('./routes/transactions.js');
app.use(cors())
app.use(express.json());


connectDB();
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
    console.log('morgan connected')
}

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname, 'client','index.html')))
}

app.use('/api/v1/transactions', transactions)


app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
})




