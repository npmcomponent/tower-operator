
if ('undefined' === typeof window) {
  var operator = require('..');
  var assert = require('assert');
} else {
  var operator = require('tower-operator');
  var assert = require('assert');
}

describe('operator', function(){
  it('should multiply', function(){
    assert(6 === operator('*')(2, 3));
  });
});