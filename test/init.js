'use strict';

// Chai
const chai = require('chai');
chai.should();

global.expect = chai.expect;

global.BASEDIR = require('path').normalize(__dirname + '/../');
