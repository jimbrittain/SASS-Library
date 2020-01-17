"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/transform-origin.scss');
    var sassaby = new Sassaby(file);
    describe('returns prefixed transform-origin declarations', function(){
        it('should create four declarations, three prefixed, one not', function(){
            sassaby.includedMixin('__transform-origin').calledWithArgs('0 0').hasNumDeclarations(4);
        });
        it('should have a webkit prefix', function(){
            sassaby.includedMixin('__transform-origin').calledWithArgs('0 0').declares('-webkit-transform-origin', '0 0');
        });
        it('should have a -ms prefix', function(){
            sassaby.includedMixin('__transform-origin').calledWithArgs('0 0').declares('-ms-transform-origin', '0 0');
        });
        it('should have a -moz- prefix', function(){
            sassaby.includedMixin('__transform-origin').calledWithArgs('0 0').declares('-moz-transform-origin', '0 0');
        });
        it('should have a unprefixed version', function(){
            sassaby.includedMixin('__transform-origin').calledWithArgs('0 0').declares('transform-origin', '0 0');
        });
    });
    describe('The transform-origin-x declarations fallback', function(){
        it('should create a transform-origin declaration', function(){
            sassaby.includedMixin('__transform-origin-x').calledWithArgs(0).declares('transform-origin', '0 inherit');
        });
    });
    describe('The transform-origin-y declarations fallback', function(){
        it('should create a transform-origin declaration', function(){
            sassaby.includedMixin('__transform-origin-y').calledWithArgs(0).declares('transform-origin', 'inherit 0');
        });
    });
});
