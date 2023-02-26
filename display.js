const express=require('express')
const app=express()
console.log('Server is running')
app.use(express.static('public'));
app.listen(5000);
