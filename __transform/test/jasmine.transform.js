"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/transform.scss');
    var sassaby = new Sassaby(file, {
        dependencies: [
            path.resolve(__dirname, '../../list-create-exclude/src/list-create-exclude.scss'),
            path.resolve(__dirname, '../../arguments/src/arguments.scss'),
            path.resolve(__dirname, '../../list-change-separator/src/list-change-separator.scss'),
            path.resolve(__dirname, '../../safe-unquote/src/safe-unquote.scss')
        ]
    });
    describe('transform creates prefixed and unprefixed declarations', function(){
        it('Creates an unprefixed declaration', function(){
            sassaby.includedMixin('__transform').calledWithArgs('matrix(1, 2, 3, 4, 5, 6)').declares('transform', 'matrix(1,2,3,4,5,6)');
        });
        it('Creates a webkit prefixed declaration', function(){
            sassaby.includedMixin('__transform').calledWithArgs('translate(120px, 50%)').declares('-webkit-transform', 'translate(120px,50%)');
        });
        it('Creates an opera prefixed declaration', function(){
            sassaby.includedMixin('__transform').calledWithArgs('scale(2,0.5)').declares('-o-transform', 'scale(2,0.5)');
        });
        it('Creates a mozilla prefixed declaration', function(){
            sassaby.includedMixin('__transform').calledWithArgs('rotate(0.5turn)').declares('-moz-transform', 'rotate(0.5turn)');
        });
        it('Creates a (old) ms prefixed declaration', function(){
            sassaby.includedMixin('__transform').calledWithArgs('skew(30deg, 20deg)').declares('-ms-transform', 'skew(30deg,20deg)');
        });
        it('Creates a joined declaration with multiple parameters', function(){
            sassaby.includedMixin('__transform').calledWithArgs('scale(0.5)', 'translate(-100%, -100%)').declares('transform', 'scale(0.5) translate(-100%,-100%)');
        });
        it('Creates a joined declaration with multiple parameters', function(){
            sassaby.includedMixin('__transform').calledWithArgs('scale(0.5) translate(-100%, -100%)').declares('transform', 'scale(0.5) translate(-100%,-100%)');
        });
        /*
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
        }); */
    });
});
