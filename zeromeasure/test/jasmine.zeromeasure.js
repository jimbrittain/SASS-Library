"use strict";
var path = require('path');
var Sassaby = require('sassaby');
describe('Test Suite', function() {
    var file = path.resolve(__dirname, '../src/zeromeasure.scss');
    var sassaby = new Sassaby(file);
    describe('Function to return correct zero measure based on unit', function(){
        it('Correctly returns zero measures for ', function(){
            //var zm = sassaby.func('zeromeasure');
            //console.log(zm.calledWithArgs('em').equals('0em'));
            //console.log(sassaby.func('zeromeasure').calledWithArgs('em'));
            /*
            console.log(sassaby.func('zeromeasure').calledWithArgs('em'));
            sassaby.func('zeromeasure').calledWithArgs('em').equals('0em');
            sassaby.func('zeromeasure').calledWithArgs('ex').equals('0ex');
            sassaby.func('zeromeasure').calledWithArgs('px').equals('0px');
            sassaby.func('zeromeasure').calledWithArgs('in').equals('0in');
            sassaby.func('zeromeasure').calledWithArgs('cm').equals('0cm');
            sassaby.func('zeromeasure').calledWithArgs('pc').equals('0pc');
            sassaby.func('zeromeasure').calledWithArgs('pt').equals('0pt');
            sassaby.func('zeromeasure').calledWithArgs('%').equals('0%');
            sassaby.func('zeromeasure').calledWithArgs('vw').equals('0vw');
            sassaby.func('zeromeasure').calledWithArgs('vh').equals('0vh');
            sassaby.func('zeromeasure').calledWithArgs('rem').equals('0rem');
            sassaby.func('zeromeasure').calledWithArgs('ch').equals('0ch');
            sassaby.func('zeromeasure').calledWithArgs('Q').equals('0Q');
            sassaby.func('zeromeasure').calledWithArgs('mm').equals('0mm');
            sassaby.func('zeromeasure').calledWithArgs('vmin').equals('0vmin');
            sassaby.func('zeromeasure').calledWithArgs('vmax').equals('0vmax');
            sassaby.func('zeromeasure').calledWithArgs('deg').equals('0deg');
            sassaby.func('zeromeasure').calledWithArgs('Q').equals('0Q');
            sassaby.func('zeromeasure').calledWithArgs('lh').equals('0lh');
            sassaby.func('zeromeasure').calledWithArgs('grad').equals('0grad');
            sassaby.func('zeromeasure').calledWithArgs('rad').equals('0rad');
            sassaby.func('zeromeasure').calledWithArgs('turn').equals('0turn');
        */
        });
    });
});
