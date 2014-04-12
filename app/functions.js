if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        result = fn.apply(fn,arr);
        return result;
    },

    speak : function(fn, obj) {

        return fn.call(obj);
    },

    functionFunction : function(str) {
        var func = function(str1) {
            return str + ', ' + str1;
        }
        return func;
    },

    makeClosures : function(arr, fn) {
        var funcArray = [];
        for (var i = 0; i < arr.length; i+=1) {
            var func = function() {
                return fn(arr[i]);
            }
            funcArray.push(func);
        }
        return funcArray;

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
