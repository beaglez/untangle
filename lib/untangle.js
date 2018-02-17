'use strict'

const debug = require('debug')('untangle:lib:untangle');
const {INPUT_ERROR_MESSAGE} = require('./constant');

module.exports = function (input) {
  debug('input');
  debug(input);
  if (!Array.isArray(input)) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  const res = [];
  untangleDeep(input);

  // validate that the untangled array contains only integers
  if (res.some(item => !Number.isInteger(item))) {
    debug('input has non-integers');
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  return res;

  function untangleDeep(arr) {
    debug('untangleDeep');
    debug(arr);
    arr.forEach(item => {
      if (Array.isArray(item)) {
        debug('recurse');
        return untangleDeep(item);
      }
      res.push(item);
    });
  }
};
