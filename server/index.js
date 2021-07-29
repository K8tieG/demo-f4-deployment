require('dotenv').config()
const express = require ('express');
// this is a node js package 
const path = require ('path');


const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5500

app.listen(port, () => { console.log(`Listening on port, ${port}`)})



