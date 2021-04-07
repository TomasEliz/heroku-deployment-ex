const express = require('express')
const router = express.Router()

const {getUsers, postUser} = require('../controllers/usersControllers')

router.route('/').get(getUsers).post(postUser)

module.exports = router