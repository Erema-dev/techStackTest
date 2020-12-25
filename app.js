const mongoose = require ('mongoose')
const morgan = require ('morgan')
const express = require ('express')
const bodyParser = require ('body-parser') 
const keys = require('./config/keys')
const bikesRoutes = require('./routes/bikes')
const app = express()


mongoose.connect(keys.mongoUri)
.then(()=>{console.log('mongoDB has been connected')})
.catch((error) => console.log(error))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(require('morgan')('dev'))
app.use('/api', bikesRoutes)

module.exports = app