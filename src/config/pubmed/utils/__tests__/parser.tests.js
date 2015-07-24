jest.dontMock('xml2js');
jest.dontMock('../parser');
jest.dontMock('../../../../utils/xmlToJson');

var parser = require('../parser');
var xmlToJson = require('../../../../utils/xmlToJson');
var efetchResult = require('./mocks/efetchResult');
var efetchResultNotArray = require('./mocks/efetchResultNotArray');

describe('pubmed - parser', function() {

    describe('#_getArticle', function() {
        var jsonResult;
        beforeEach(function() {
            jsonResult = xmlToJson(efetchResult);
        });
        it('should get thr article', function() {
            var article = parser._getArticle(jsonResult);
            expect(article.articletitle[0]).toContain('Incidental detection');
        });
    });

    describe('#getAbstractSection - abstracttext is an array', function() {
        var jsonResult;
        beforeEach(function() {
            jsonResult = xmlToJson(efetchResult);
        });
        it('should pull out an opinionated array', function() {
            var abstracttext = parser.getAbstractSections(jsonResult);
            expect(abstracttext.length).toBe(5);
            expect(abstracttext[0].label).toBe('PURPOSE');
            expect(abstracttext[0].text).toContain('Survivors of childhood');
        });
    });

    describe('#getAbstractSection - abstracttext is not an array', function() {
        var jsonResult;
        beforeEach(function() {
            jsonResult = xmlToJson(efetchResultNotArray);
        });
        it('should pull out a simple array', function() {
            var abstracttext = parser.getAbstractSections(jsonResult);
            expect(abstracttext.length).toBe(1);
            expect(abstracttext[0].text).toContain('Replicating large eukaryotic genomes');
        });
    });


    describe('#getAuthors', function() {
        var jsonResult;
        beforeEach(function() {
            jsonResult = xmlToJson(efetchResult);
        });
        it('should get the authors', function() {
            var authors = parser.getAuthors(jsonResult);
            expect(authors[0].lastname).toBe('Sabin');
            expect(authors[1].lastname).toBe('Santucci');
        });
    });

});