'use strict';

const SUT = require(`${BASEDIR}/lib/untangle`);
const withData = require('mocha-testdata').async;

describe('lib untangle', function() {
  describe('test validations', function() {
    withData([
      undefined,
      null,
      'string',
      1,
      [[1,2,[3,'bad','egg']]]
    ]).it(
      'invalid input',
      function (done, bad) {
        expect(() => {
          SUT(bad);
        }).to.throw('please pass in an array of integers as input');
        done();
      }
    );
  });

  describe('test with valid inputs', function() {
    withData([
      [[1,2,3,4,5],[1,2,3,4,5]],
      [[1,2,[3,4],5],[1,2,3,4,5]],
      [[1,2,[3],4,5],[1,2,3,4,5]],
      [[1,2,[[3,4],5]],[1,2,3,4,5]],
      [[[1,2],[[3,4],5]],[1,2,3,4,5]]
    ]).it(
      'valid input',
      function (done, input, expected) {
        SUT(input).should.be.deep.equal(expected);
        done();
      }
    );
  });
});
