const express = require ('express');
const router = require('/routes');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
const app = express();
module.exports = app