/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../src/index';

chai.use(chaihttp);
chai.should();

describe('/GET /', () => {
  it('it should give a welcoming message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.a.status(200);
        res.body.should.be.an('object');
        res.body.message.should.be.equal('welcome to the TeamUsScrapper, please signUp and read the docs');
        done();
      });
  });
});
