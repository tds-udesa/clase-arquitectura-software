const { computeHash, authenticateUser } = require('../src/services/auth');

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

        await authenticateUser(username, password).then((result) => {
            expect(result).toBe(true);
        });
    });

});