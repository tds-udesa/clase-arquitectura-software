const { getConnection, closeConnections } = require("../../src/config/database");
const { computeHash } = require("../../src/services/auth");

const request = require("supertest");
const app = require("../../src/app");
require("dotenv").config();

describe('Auth Route Integration Tests', () => {

    beforeAll(async () => {
        const db = await getConnection();
        const salt = "salt";
        const password = "password123";
        const hashedPassword = computeHash(password, salt);

        await db.collection('credentials').insertOne({
            username: "testuser",
            password: hashedPassword,
            salt: salt,
        });
    });

    afterAll(async () => {
        const db = await getConnection();
        await db.collection('credentials').deleteOne({
            username: "testuser",
        });

        await closeConnections();
    });

    it('should authenticate user with correct credentials', async () => {
        const res = await request(app).post("/login").send({
            username: "testuser",
            password: "password123"
        });

        expect(res.statusCode).toEqual(200);
    });

    it('should return 401 with wrong credentials', async () => {
        const res = await request(app).post("/login").send({
            username: "testuser",
            password: "fakepassword"
        });

        expect(res.statusCode).toEqual(401);
    });
});
