/* eslint-disable no-undef */
import chai, { expect } from "chai";
import chaihttp from "chai-http";
import app from "../src/index";

chai.use(chaihttp);

describe("GET", () => {
  it("it should give a welcoming message", (done) => {
    chai
      .request(app)
      .get("/api/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("welcome to the TeamUsScrapper, please signUp and read the docs");
        done();
      });
  });
});
