const { authenticateUser } = require('../services/auth')
const { validationResult } = require('express-validator');

async function loginHandler(req, res) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }

    const { username, password } = req.body
    const isAuthenticated = await authenticateUser(username, password)

    let status = isAuthenticated ? 200 : 401

    res.status(status).json({ message: 'Usuario autenticado: ' + isAuthenticated })
}


module.exports = {
    loginHandler
}
