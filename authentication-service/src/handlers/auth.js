const { authenticateUser } = require('../services/auth')
const { validationResult } = require('express-validator');

async function loginHandler(req, res) {
    /*
        #swagger.tags = ['Authentication']
        #swagger.description = 'Endpoint to login a user and receive an access token.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'User credentials.',
            required: true,
            schema: {
                username: 'user1',
                password: 'password123'
            }
        }
    */
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
