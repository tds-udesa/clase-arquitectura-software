const app = require('./app')
const {closeConnections} = require('./config/database')
const { port } = require('./config/config')

const server = app.listen(port, () => {
    console.log(`Authentication service listening on port ${port}`)
})

const gracefulShutdown = async () => {
    console.log('Shutting down server...')

    server.close(async () => {
        await closeConnections()
        console.log('Server and database closed.')
        process.exit(0)
    });
}

// Handle ctrl+c and termination signals
process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
