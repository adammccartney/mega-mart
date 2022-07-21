import assert from "assert"
import { expect } from "chai"

import megaMart from "../src/index.js"
let items = megaMart.items;

describe('items', function () {
  // this is just testing data which is not really smart, included only for
  // reference in order to learn a bit about mocha/chai
  describe('itemDataIsString()', function () {
    it("should return true when the value is a string", function () {
      expect(items[0].name).to.be.a('string')
    });
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


