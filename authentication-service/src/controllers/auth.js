const { authenticateUser } = require('../services/auth')

async function loginHandler(req, res) {
    const { username, password } = req.body

    const isAuthenticated = await authenticateUser(username, password)
    res.status(200).json({ message: 'Usuario autenticado: ' + isAuthenticated })
}


module.exports = {
    loginHandler
}