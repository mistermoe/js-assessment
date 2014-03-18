if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {

        //i think i hacked this.
        return obj.greeting + ", " + obj.name + "!";
    },

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {

    }
  };
});
