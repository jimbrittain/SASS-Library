"use strict";
var path = require('path');
var Sassaby = require('sassaby');
console.log(Sassaby);
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/list-unshift.scss');
    var sassaby = new Sassaby(file);
    describe('Can add to list', function(){
        it('Returns $value when not list and warns', function(){
            sassaby.func('list-unshift').calledWithArgs('hello', 'james').equals('hello');
        });
        it('Returns a list with value at front', function(){
            sassaby.func('list-unshift').calledWithArgs('1 2 3 4 5 6', 'a').equals('a 1 2 3 4 5 6');
        });
    });
});
