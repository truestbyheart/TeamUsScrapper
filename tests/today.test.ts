/* eslint-disable no-undef */
import chai, { expect } from "chai";
import chaihttp from "chai-http";

import app from "../src/index";

chai.use(chaihttp);

describe("GET series", () => {
  it("should return a list episodes", (done) => {
    chai
      .request(app)
      .get("/api/series/today/blindspot")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.episodes).to.be.an("array");
        done();
      });
  });
});
