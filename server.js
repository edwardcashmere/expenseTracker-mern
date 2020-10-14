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

app.use('/api/v1/transactions', transactions)


if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join('client/build')))
    app.get('*',(req,res)=>res.sendFile(path.join(__dirname, 'client','build','index.html')))
}



app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
})




