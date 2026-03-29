require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const {rateLimit } = require('express-rate-limit')

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
    statusCode: 429,
    });

const app = express()

app.use(cors())
app.use(rateLimiter)

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001'
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:8000'

app.get('/', (req, res) => {
    res.send(`Welcome to the API Gateway running on port ${process.env.PORT || 3000}`)
})

app.use('/auth', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/auth': '' },
}))

app.use('/users-service', createProxyMiddleware({
  target: USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/users-service': '' }
}))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`)
})
