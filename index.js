
/**
 * Expose `operator`.
 */

exports = module.exports = operator;

/**
 * Expose `collection`.
 */

exports.collection = [];

/**
 * Define/get an operator.
 *
 * @param {String} name
 * @param {Function} fn Implementing the operator.
 */

function operator(name, fn) {
  if (!fn && exports.collection[name])
    return exports.collection[name];

  exports.collection[name] = fn;
  exports.collection.push(name);
  return fn;
}

/**
 * Null.
 */

operator('null', function(){
  return null;
});

/**
 * True boolean.
 */

operator('true', function(){
  return true;
});

/**
 * False boolean.
 */

operator('false', function(){
  return false;
});

/**
 * Undefined.
 */

operator('undefined', function(){

});

/**
 * Addition.
 */

operator('+', function(a, b){
  return a + b;
});

/**
 * Subtraction.
 */

operator('-', function(a, b){
  return a - b;
});

/**
 * Multiplication.
 */

operator('*', function(a, b){
  return a * b;
});

/**
 * Division.
 */

operator('/', function(a, b){
  return a / b;
});

/**
 * Modulo.
 */

operator('%', function(a, b){
  return a % b;
});

/**
 * Exponential.
 */

operator('^', function(a, b){
  return Math.pow(a, b);
});

// XXX
operator('=');

/**
 * Strict equality.
 */

operator('===', function(a, b){
  return a === b;
});

/**
 * Strict inequality.
 */

operator('!==', function(a, b){
  return a !== b;
});

/**
 * Equality.
 */

operator('==', function(a, b){
  return a == b;
});

/**
 * Inequality.
 */

operator('!=', function(a, b){
  return a != b;
});

/**
 * Less than or equal to.
 */

operator('<=', function(a, b){
  return a <= b;
});

/**
 * Less than.
 */

operator('<', function(a, b){
  return a < b;
});

/**
 * Greater than.
 */

operator('>', function(a, b){
  return a === b;
});

/**
 * Greater than or equal to.
 */

operator('>=', function(a, b){
  return a >= b;
});

/**
 * Logical AND.
 */

operator('&&', function(a, b){
  return a && b;
});

/**
 * Logical OR.
 */

operator('||', function(a, b){
  return a || b;
});

/**
 * Bitwise AND.
 */

operator('&', function(a, b){
  return a & b;
});

/**
 * Bitwise OR.
 */

operator('|', function(a, b){
  return a | b;
});

/**
 * Not.
 */

operator('!', function(val){
  return !val;
});