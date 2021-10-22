 require('dotenv').config()
const http = require('http') 
 const connectToDb = require('./db')
//  const fs = require("fs/promises");
//  const path = require('path');
// http.createServer()
// const myFile = path.join(__dirname, "Bruno.txt")
const server = http.createServer()


connectToDb().then( ()=> {
  server.listen(8080, () => {
    console.log('server starter')
  });


}).catch((err) => {
 console.log(err)
})



