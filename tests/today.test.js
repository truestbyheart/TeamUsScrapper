/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';

import app from '../src/index';

chai.use(chaihttp);
chai.should();

describe('/GET series', () => {
  it('should return a list episodes', (done) => {
    chai
      .request(app)
      .get('/series?searchTerm=blindspot')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.series.should.be.an('array');
        done();
      });
  });
});
