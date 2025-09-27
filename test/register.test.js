const request = require('supertest')
const { expect } = require('chai')

describe('Login', () => {

    describe('POST /login', () => {

        it('Should return 200 with a string token when using valid credentials', async () => {
            const response = await request('http://localhost:3000')
                .post('/users/register')
                .send({
                    "username": "Bruno",
                    "password": "123456",
                    "favorecidos": [
                        "Rafaela"
                    ]
                })

            expect(response.status).to.equal(201)
        })

    })

})