const loginSchema = {
    username: {
        in: ['body'],
        exists: {
            errorMessage: 'Username is required',
        },
        notEmpty: {
            errorMessage: 'Username cannot be empty',
        },
    },
    password: {
        in: ['body'],
        exists: {
            errorMessage: 'Password is required',
        },
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password should be at least 8 chars',
        },
    },
}

module.exports = {
    loginSchema,
}