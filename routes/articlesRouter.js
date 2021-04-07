const express = require('express')
const router = express.Router()
const {getArticles, postArticle} = require('../controllers/articleControllers')

router.route('/').get(getArticles).post(postArticle)

module.exports = router