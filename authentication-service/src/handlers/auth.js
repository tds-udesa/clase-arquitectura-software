const { authenticateUser } = require('../services/auth')
const { validationResult } = require('express-validator');

async function loginHandler(req, res) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }

    const { username, password } = req.body
    const token = await authenticateUser(username, password)

    let status = (token !== null) ? 200 : 401
    let response = (token !== null) ? { access_token: token } : null

    res.status(status).json(response)
}


module.exports = {
    loginHandler
}
