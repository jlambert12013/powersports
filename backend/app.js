require('dotenv').config()

//  Config
const URI = process.env.URI
const PORT = process.env.PORT

//	Modules
const path = require('path')
require('colors')

//  Express
const express = require('express')
const app = express()

//	Static
const publicRoot = path.join(__dirname + '/public')
app.use(express.static(publicRoot))
app.use('/css', express.static(publicRoot))

//	Multer
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cd) => {
//     cd(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });

//  Error
const errorHandler = require('./middleware/errorHandler')

//  Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  Mongo
const mongo = require('./config/db')
mongo(URI)

// Routes
app.use('/api/catalog', require('./routes/api/catalogRoute'))
app.use('/api/users', require('./routes/api/userRoute'))

app.use(errorHandler)

// Server
app.listen(PORT, function () {
  console.log(`             `)
  console.log(`  ALABAMA POWERSPORTS `.underline.brightRed.bgWhite.bold)
  console.log(`SERVER: RUNNING ON PORT ${PORT.green}`)
})
