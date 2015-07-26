jest.autoMockOff() ;

var parser = require('../parser');
var utils = require('../../../../utils/utils');
var efetchResult = require('./mocks/efetchResult');

describe('pubmed - parser', function() {

    var jsonResult;
    beforeEach(function() {
        jsonResult = utils.xmlToJson(efetchResult);
    });

    describe('#_getGeneCommentary', function() {
        it('should get the comments section', function() {
            var commentary = parser._getGeneCommentary(jsonResult);
            expect(commentary.length).toBe(396);
        });
    });

    describe('#getPhenotypes', function() {
        it('should get the comments section', function() {
            var phenotypes = parser.getPhenotypes(jsonResult);
            expect(phenotypes.length).toBe(6);
            expect(phenotypes[0].name).toContain('Costello')
            expect(phenotypes[0].sources[0].name).toBe('Gene Reviews');
            expect(phenotypes[0].sources[0].id).toBe('NBK1507');
        });
    });

});