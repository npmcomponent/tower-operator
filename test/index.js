var operator = 'undefined' == typeof window
  ? require('..')
  : require('tower-operator'); // how to do this better?

var assert = require('assert');

describe('operator', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
