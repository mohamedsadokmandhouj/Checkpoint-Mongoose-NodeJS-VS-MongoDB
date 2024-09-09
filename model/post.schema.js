const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema ({
    title : String ,
    description : String ,
    userId : String  })

const Post = mongoose.model('post' , postSchema )

module.exports = Post