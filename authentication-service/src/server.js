const app = require('./app')
const { port } = require('./config/config')

app.listen(port, () => {
    console.log(`Authentication service listening on port ${port}`)
})