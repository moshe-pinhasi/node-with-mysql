const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express-cors');
var mysql = require('mysql'); 

const DBService = require('./services/DBService')
DBService.connectDB()

const app = express()
app.use(cors({
    allowedOrigins: [
        'localhost:5500', '127.0.0.1:5500','localhost:8080', '127.0.0.1:8080'
    ]
}))

app.use(bodyParser());

const addBugRoutes = require('./routes')
addBugRoutes(app)

app.listen(3000, 
    () => console.log('Example app listening on port 3000!')
)


