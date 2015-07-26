jest .dontMock('lodash');
jest.dontMock('../getValueFromPath');
jest.dontMock('./mocks/getValueFromPath.mock');

var getValueFromPath = require('../getValueFromPath');
var mock = require('./mocks/getValueFromPath.mock')

describe('pubmed - parser', function() {

    describe('#getValueFromPath', function() {
        it('should move through the path', function() {
            var end = getValueFromPath(mock, [
                'a',
                'b',
                'c',
                'd'
            ]);
            expect(end[0]).toBe('end');
        });

        it('should return null', function() {
            var end = getValueFromPath(mock, [
                'a',
                'b',
                'xxx',
                'd'
            ]);
            expect(end).toBe(null);
        });

    });

});