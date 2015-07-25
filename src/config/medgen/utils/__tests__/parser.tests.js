jest.dontMock('lodash');
jest.dontMock('../parser');
jest.dontMock('./mocks/selectedResult.mock');

var parser = require('../parser');
var selectedResult = require('./mocks/selectedResult.mock');

describe('medgen - parser', function() {

    describe('#getNames', function() {
        it('should get the synonyns', function() {
            var names = parser.getNames(selectedResult.conceptmetaJson.result);
            expect(names.length).toBe(4);
            expect(names[0].name).toBe('Adenocarcinoma, Follicular');
        });
    });

    describe('#getDefinitions', function() {
        it('should get the defintions', function() {
            var defs = parser.getDefinitions(selectedResult.conceptmetaJson.result);
            expect(defs.length).toBe(2);
            expect(defs[0].text).toContain('Nonmedullary thyroid');
            expect(defs[0].source).toBe('OMIM');
        });
    });

    describe('#getChromosomes', function() {
        it('should get the chromosomes', function() {
            var chromosomes = parser.getChromosomes(selectedResult.conceptmetaJson.result);
            expect(chromosomes.length).toBe(3);
        });
    });

    describe('#getGenes', function() {
        it('should get genes', function() {
            var genes = parser.getGenes(selectedResult.conceptmetaJson.result);
            expect(genes.length).toBe(4);
            expect(genes[0].name).toBe('HRAS');
            expect(genes[0].cytogenicLocation).toBe('11p15.5');
        });
    });

    describe('#getOmim', function() {
        it('should get the chromosomes', function() {
            var omim = parser.getOmim(selectedResult.conceptmetaJson.result);
            expect(omim.id).toBe('188470');
        });
    });

    describe('#getModesOfInheritance', function() {
        it('should get the modes of inheritance', function() {
            var modes = parser.getModesOfInheritance(selectedResult.conceptmetaJson.result);
            expect(modes.length).toBe(2);
            expect(modes[0].name).toBe('Autosomal dominant inheritance')
        });
    });

    describe('#getClinicalFeatures', function() {
        it('should get the clinical features', function() {
            var features = parser.getClinicalFeatures(selectedResult.conceptmetaJson.result);
            expect(features.length).toBe(2);
            expect(features[0].name).toBe('Abnormality of metabolism/homeostasis');
        });
    });

});