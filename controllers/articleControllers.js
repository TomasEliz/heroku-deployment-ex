const Article = require('../models/Article')

exports.getArticles = async (req,res,next) => {
    try {
        const articles = await Article.find()
    res.json(articles)
    } catch (err) {
        const error = new Error('Cannot find articles')
        next(error)
    }
}

exports.postArticle = async (req,res,next) => {
    try {
        const newArticle = await Article.create(req.body)
        res.json(newArticle)
    } catch (err) {
        const error = new Error('Cannot post article')
        next(error)
    }
}