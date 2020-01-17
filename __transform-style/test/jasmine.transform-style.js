"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/transform-style.scss');
    var sassaby = new Sassaby(file, {
        dependencies: [
            path.resolve(__dirname, '../../is-reserved-variable/src/is-reserved-variable.scss')
        ]
    });
    describe('__transform-style creates prefixed and unprefixed declarations', function(){
        it('Creates three declarations', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('flat').hasNumDeclarations(3);
        });
        it('Creates an unprefixed declaration', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('flat').declares('transform-style', 'flat');
        });
        it('Creates an -moz declaration', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('flat').declares('-moz-transform-style', 'flat');
        });
        it('Creates an -webkit declaration', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('flat').declares('-webkit-transform-style', 'flat');
        });
        it('Creates a declaration when using correct syntax', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('flat').declares('-webkit-transform-style', 'flat');
            sassaby.includedMixin('__transform-style').calledWithArgs('preserve-3d').declares('-webkit-transform-style', 'preserve-3d');
            sassaby.includedMixin('__transform-style').calledWithArgs('initial').declares('-webkit-transform-style', 'initial');
            sassaby.includedMixin('__transform-style').calledWithArgs('inherit').declares('-webkit-transform-style', 'inherit');
            sassaby.includedMixin('__transform-style').calledWithArgs('unset').declares('-webkit-transform-style', 'unset');
        });
        it('Does not create declaration when using incorrect syntax', function(){
            sassaby.includedMixin('__transform-style').calledWithArgs('uninherit').doesNotDeclare('-webkit-transform-style', 'uninherit');
        });
    });
});
