const app = require('express')()
const cors = require('cors');
const bodyParser = require("body-parser");
const { Router } = require('./routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

// Add the router object to the app
app.use(Router)

module.exports = app