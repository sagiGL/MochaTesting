
const assert = require('chai').assert;
const app = require('../app');

helloMochaResult = app.helloMocha();
addNumberResult = app.addNumbers(5,5);
subNumberResult = app.subNumbers(10,5);
powNumberResult = app.powNumber(5);


describe('App', function () {
    describe('helloMocha', function () {
        it('helloMocha should return hello mocha', function () {
            assert.equal(helloMochaResult, 'hello mocha');
        });
        it('helloMocha should return type string', function () {
            assert.typeOf(helloMochaResult,'string');
        });
    });

    describe('addNumbers', function () {
        it('addNumbers should be above 5', function () {
            assert.isAbove(addNumberResult, 5);
        });
        it('addNumbers should return type number', function () {
            assert.typeOf(addNumberResult,'number');
        });
    });
    describe('subNumbers', function () {
        it('subNumbers should be lower then 10', function () {
            assert.isBelow(subNumberResult, 10);
        });
        it('subNumbers should return type number', function () {
            assert.typeOf(subNumberResult,'number');
        });
    });
    describe('powNumber', function () {
        it('powNumber should be equal 25', function () {
            assert.equal(powNumberResult, 25);
        });
        it('powNumber should return type number', function () {
            assert.typeOf(powNumberResult,'number');
        });
    });
});