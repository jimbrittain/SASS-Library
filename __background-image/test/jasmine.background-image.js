"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/background-image.scss');
    var sassaby = new Sassaby(file, {
        dependencies: [
            path.resolve(__dirname, '../../../globalimport.scss')
        ]
    });
    describe('__background-image creates prefixed and unprefixed declarations', function(){
        it('Creates a linear gradient with all the trash', function(){
            sassaby.includedMixin('__background-image').calledWithArgs('linear-gradient', 'top', 'rgba(255,255,255,0.2)', '25%', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)').equals('background-image:-webkit-gradient(linear,top,from rgba(255,255,255,0.2),color-stop(25% rgba(255,255,255,0)),to rgba(255,255,255,0));background-image:-moz-linear-gradient(top,rgba(255,255,255,0.2),rgba(255,255,255,0) 25%,rgba(255,255,255,0));background-image:-ms-linear-gradient(top,rgba(255,255,255,0.2),rgba(255,255,255,0) 25%,rgba(255,255,255,0));background-image:-o-linear-gradient(top,rgba(255,255,255,0.2),rgba(255,255,255,0) 25%,rgba(255,255,255,0));background-image:-webkit-linear-gradient(top,rgba(255,255,255,0.2),rgba(255,255,255,0) 25%,rgba(255,255,255,0));background-image:linear-gradient(to bottom,rgba(255,255,255,0.2),rgba(255,255,255,0) 25%,rgba(255,255,255,0))');
        });
    });
});
