
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
 */

function operator(name, fn) {
  if (!fn && exports.collection[name])
    return exports.collection[name];

  exports.collection[name] = fn;
  exports.collection.push(name);
  return fn;
}

// inspired from https://github.com/angular/angular.js/blob/master/src/ng/parse.js
operator('null', function(){
  return null;
});

operator('true', function(){
  return true;
});

operator('false', function(){
  return false;
});

var noop = function(){};

operator('undefined', noop);

operator('+', function(self, locals, a, b){
  a = a(self, locals);
  b = b(self, locals);

  if (undefined !== a) {
    return undefined !== b
      ? a + b
      : a;
  }
  return undefined !== b
    ? b
    : undefined;
});

// XXX: todo
operator('-');
operator('*');
operator('/');
operator('%');
operator('^');
operator('=');
operator('===');
operator('!==');
operator('==');
operator('!=');
operator('<=');
operator('<');
operator('>');
operator('>=');
operator('&&');
operator('||');
operator('&');
operator('|');
operator('!');