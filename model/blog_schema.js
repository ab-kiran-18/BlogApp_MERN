var mongoose = require('mongoose')

const blog_schema = mongoose.Schema({
    name : String,
    title : String,
    description : String,
    content : String
})

const user = mongoose.model('user1',blog_schema)

export default user