const express = require("express")
const path = require("path")
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser")


const app =  express()
const port = 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"")))

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () =>{
    console.log(`blog app is listening at http://localhost:${port}`)
})