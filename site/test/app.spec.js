const request = require('../src/index')
const supertest = require('supertest')
const expect = require('chai').expect;

describe("GET /user",()=>{
    it("Testing route", (done) =>{
        supertest(request)
        .get('/user')
        .expect(200)
        .expect(response =>{
            console.log(response.body);
        })
        .end(err =>{
            if(err) return done(err);
            return done();
        })
    })
})