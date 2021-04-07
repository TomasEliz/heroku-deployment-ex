const mongoose = require('mongoose')
const {model, Schema} = mongoose

const ArticleSchema = new Schema({
    title: {type: String, required: true},
    author: {type:String, required: true},
    keywords: {type: [String], required: true, default: undefined},
    category: {type: String, required: true},
    comments: {type: [
        {
            text: {type: String, required: true},
            user: {type: String, required: true},
            _id:false
        }
    ], required: true, default: undefined}
}, {
    timestamps:true,
    versionKey: false
})

const Article = model("Article", ArticleSchema)

module.exports = Article