const express = require("express")
const path = require("path")
const blogs = require("../data/blogs")
const mongoose = require("mongoose")
const router = express.Router()

router.get('/',(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'     
    })
    res.render('homePage');
})

router.get('/blog',(req,res) =>{
    res.render('Myblogs',{
        blogs: blogs
    });
})

router.get('/blogpost/:name',(req,res) => {
    myBlog = db.user.find()
    res.render('blogPage', {
        name : myBlog[0].name,
        title: myBlog[0].title,
        description: myBlog[0].description,
        content: myBlog[0].content
    })
})

router.get('/addBlog',(req,res) =>{
    res.render('addBlog');
})

// const url = 'mongodb+srv://<user1>:<12345>@cluster0.jq8pt.mongodb.net/Cluster0?retryWrites=true&w=majority'
const url='mongodb://localhost/tester'

mongoose.connect(url,{}).then(()=>{
})
var db = mongoose.connection;

db.on('error',() =>{
    console.log('error in connection of database..')
})

db.once('open',() =>{
    console.log('connected to database..')
})

router.post("/post_blog",(req,res) =>{
    var name = req.body.name;
    var title = req.body.title;
    var description = req.body.description;
    var content = req.body.content;

    var data = {
        name : name,
        title : title,
        description : description,
        content : content
    }

    db.collection('users').insertOne(data,(err,collection) =>{
        if(err){
            throw err;
        }
        console.log('record inserted Successfully');
        return res.send('successpage.html')
    })

    router.post()
    
})

module.exports = router