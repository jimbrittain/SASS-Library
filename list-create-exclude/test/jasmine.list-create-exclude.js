"use strict";
var path = require('path');
var Sassaby = require('sassaby');
console.log(Sassaby);
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/list-create-exclude.scss');
    var sassaby = new Sassaby(file);
    describe('Creates a list excluding those which use are not from list', function(){
        it('Creates a list length 5 if supplied with 5 params, plus exclusion', function(){
            sassaby.func('list-create-exclude').calledWithArgs(false, 1, 2, 3, 4, 5).equals('1 2 3 4 5');
        });
        it('Creates a list length 4 if supplied with 5 params (one being exclusion), plus exclusion', function(){
            sassaby.func('list-create-exclude').calledWithArgs(false, 1, 2, 3, 4, false).equals('1 2 3 4');
        });
        it('Returns false if only supplied with exclusions', function(){
            sassaby.func('list-create-exclude').calledWithArgs(false, false, false).isFalse();
        });
        it('Returns false if supplied with nothing', function(){
            sassaby.func('list-create-exclude').calledWithArgs(false).isFalse();
        });
    });
});
