/*
var mongoose = require('mongoose');
var request = require('superagent');
var agent = request.agent();

var dbUrl = require("../server/config/secrets");
var User = require('../server/models/user');

var db;

describe('User', function() {

before(function(done) {
  db = mongoose.connect(dbUrl.db);
    done();
  });

  after(function(done) {
     mongoose.connection.close()
    done();
  });

  beforeEach(function(done) {
    var user = new User({
      email: 'bruce@wayne.inc',
      password: 'batman',
      firstName: 'Bruce',
      lastName: 'Wayne'
    });

    user.save(function(err, user) {
      if (err) console.log('error' + err.message);
      else console.log('no error');

      done();
    });
  });

  it('find a user by username', function(done) {
    User.findOne({ email: 'bruce@wayne.inc' }, function(err, user) {
      user.email.should.eql('bruce@wayne.inc');
      console.log("   email: ", user.email)
      done();
    });
  });

  it ('login', function(done) {
    agent.post('http://localhost:3000/')
      .send({ email: 'abc@abc.com', password: 'abcabcabc' })
      .end(function(err, res) {
      if (err) console.log('error' + err.message);
        console.log(JSON.stringify(res));
	
        //res.should.have.status(200);

        done();
      });
  });

  afterEach(function(done) {
    User.remove({ email: 'bruce@wayne.inc' }, function() {
      done();
    });
  });

process.on('uncaughtException', function (err) {
    console.log(err);
}); 
});
*/
