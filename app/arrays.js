if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var search = arr.indexOf(item);
        return search;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                arr.splice(i, 1);
            }
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length; i > 0; i--) {
            if (arr[i] == item) {
                arr.splice(i, 1);
            }
            return arr;
        }
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
            arr.unshift(item);
            return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        arr3 = arr1.concat(arr2);
        return arr3;

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var itemCount = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                itemCount += 1;
            }
        }
        return itemCount;

    },

    duplicates : function(arr) {
        return arr;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;

    },

    findAllOccurrences : function(arr, target) {
        var occurances = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                occurances.push(i);
            }
        }
        return occurances;
    }
  };
});
