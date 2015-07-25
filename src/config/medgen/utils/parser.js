import _ from 'lodash'

/*
    http://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html
*/

 const parser = {

    getNames: function(result) {
        const names = _.head(result.names);
        return names.name.map(element => {
            return {
                 name: element._
            }
        });
    },

    getDefinitions: function(result) {
        const defs = _.head(result.definitions);
        return defs.definition.map(element => {
            return {
                text: element._ ,
                source: element.$.source
            }
        });
    },

    getChromosomes: function(result) {
        return result.chromosome;
    },

    getOmim: function(result) {
        const omim = _.head(result.omim);
        return {
            id: _.head(omim.mim)
        }
    },

    getGenes: function(result) {
        const genes = _.head(result.associatedgenes);
        return genes.gene.map(element => {
            return {
                name: element._,
                geneId: element.$.gene_id,
                chromosome: element.$.chromosome,
                cytogenicLocation: element.$.cytogen_loc
            }
        });
    },

    getPharmacologicalResponse: function(result) {
        //result.pharmacologicresponse
        throw new Error('Do me, and add some tests please')
    },

    getModesOfInheritance: function(result) {
        const modes = _.head(result.modesofinheritance);
        return modes.modeofinheritance.map(element => {
            return {
                uid: element.$.uid,
                name: _.head(element.name),
                definition: _.head(element.definition),
                semanticType:  _.head(element.semantictype)
            }
        })
    },

    getClinicalFeatures: function(result) {
        const features = _.head(result.clinicalfeatures);
        return features.clinicalfeature.map(element => {
            return {
                uid: element.$.uid,
                name: _.head(element.name),
                definition: _.head(element.definition),
                semanticType:  _.head(element.semantictype)
            }
        })
    }
}

export default parser;