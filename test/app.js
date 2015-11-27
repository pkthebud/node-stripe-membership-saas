var request = require('supertest');
var app = require('../server/index.js');
 
describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});


describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});


describe('GET /forgot', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/forgot')
      .expect(200, done);
  });
});

