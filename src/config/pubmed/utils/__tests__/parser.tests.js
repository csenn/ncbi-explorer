jest.dontMock('xml2js');
jest.dontMock('../parser');

var parser = require('../parser');
var xml2js = require('xml2js');
var efetchResult = require('./mocks/efetchResult');
var efetchResultNotArray = require('./mocks/efetchResultNotArray');

describe('pubmed - parser', function() {

	describe('#getAbstractSection - abstracttext is an array', function() {
		var jsonResult;

		beforeEach(function() {
			xml2js.parseString(efetchResult, { normalizeTags: true }, function(err, result) {
				jsonResult = result;
			});
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
			xml2js.parseString(efetchResultNotArray, { normalizeTags: true }, function(err, result) {
				jsonResult = result;
			});
		});

		it('should pull out a simple array', function() {
			var abstracttext = parser.getAbstractSections(jsonResult);
			expect(abstracttext.length).toBe(1);
			expect(abstracttext[0].text).toContain('Replicating large eukaryotic genomes');
		});
	});

});