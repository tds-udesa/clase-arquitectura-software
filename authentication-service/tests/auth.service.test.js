const { computeHash, authenticateUser } = require('../src/services/auth');
const { findUserByUsername } = require('../src/dal/credentials');


jest.mock('../src/dal/credentials', () => {
    const originalModule = jest.requireActual('../src/dal/credentials');

    return {
        __esModule: true,
        ...originalModule,
        findUserByUsername: jest.fn(() => {
            return Promise.resolve({
                username: 'testuser',
                salt: 'salt',
                password: 'password123salt'
            });
        }),
    };
});

describe('Authentication Service Layer', () => {

    it('should compute a SHA-256 hash correctly', () => {
        const password = 'password123';
        const salt = 'salt';
        const expectedHash = 'password123salt';
        expect(computeHash(password, salt)).toBe(expectedHash);
    });

    it('should authenticate user with correct credentials', async () => {
        const username = 'testuser';
        const password = 'password123';

        const result = await authenticateUser(username, password)

        expect(result).toBe(true);
    });
});
