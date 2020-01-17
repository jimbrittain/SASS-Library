"use strict";
var path = require('path');
var Sassaby = require('sassaby');
console.log(Sassaby);
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/perspective.scss');
    var sassaby = new Sassaby(file);
    describe('Correctly identifies reserved and unreserved values', function(){
        it('Produces 2 prefixed and unprefixed declarations', function(){
            sassaby.includedMixin('__perspective').calledWithArgs('300px').hasNumDeclarations(3);
        });
        it('Produces a -webkit- declaration', function(){
            sassaby.includedMixin('__perspective').calledWithArgs('300px').declares('-webkit-perspective', '300px');
        });
        it('Produces a -moz- declaration', function(){
            sassaby.includedMixin('__perspective').calledWithArgs('300px').declares('-moz-perspective', '300px');
        });
        it('Produces an unprefixed declaration', function(){
            sassaby.includedMixin('__perspective').calledWithArgs('300px').declares('perspective', '300px');
        });
    });
});
