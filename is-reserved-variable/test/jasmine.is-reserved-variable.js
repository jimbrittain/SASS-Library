"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/is-reserved-variable.scss');
    var sassaby = new Sassaby(file);
    describe('Correctly identifies reserved and unreserved values', function(){
        it('Inherit comes up as true value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('inherit').isTrue();
        });
        it('Unset comes up as true value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('unset').isTrue();
        });
        it('Initial comes up as true value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('initial').isTrue();
        });

        it('Uninherit comes up as a false value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('uninherit').isFalse();
        });
        it('10em comes up as a false value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('10em').isFalse();
        });
        it('10 comes up as a false value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('10').isFalse();
        });
        it('Undefined comes up as a false value', function(){
            sassaby.func('is-reserved-variable').calledWithArgs('').isFalse();
        });
    });
});
