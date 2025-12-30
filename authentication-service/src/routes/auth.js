const express = require('express')
const { loginHandler } = require('../handlers/auth')
const {loginSchema} = require('../middlewares/validations')
const { checkSchema } = require('express-validator');

const router = express.Router()

router.post('/login', checkSchema(loginSchema), loginHandler)

module.exports = router