import _ from 'lodash'
import utils from '../../../utils/utils'


/*
    http://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html
*/

const parser = {

    /*
        Get Phenotypes
    */

    _getGeneCommentary: function(result) {
        return utils.getValueFromPath(result, [
            'entrezgene-set',
            'entrezgene',
            'entrezgene_comments',
            'gene-commentary'
        ]);
    },

    _getIdFromSource: function(source) {
        return utils.getValueFromPath(source, [
            'gene-commentary_comment',
            'gene-commentary',
            'gene-commentary_source',
            'other-source',
            'other-source_src',
            'dbtag',
            'dbtag_tag',
            'object-id',
            'object-id_str'
        ]);
    },

    getPhenotypes: function(result) {
        var commentary = parser._getGeneCommentary(result)
        var foundCommentary = _.find(commentary, item => {
            return _.first(item['gene-commentary_heading']) === 'Phenotypes';
        });

        var phenotypes = utils.getValueFromPath(foundCommentary, [
            'gene-commentary_comment',
            'gene-commentary'
        ]);

        return phenotypes.map(phenotype => {

            var sourceCommentary = utils.getValueFromPath(phenotype, [
                'gene-commentary_comment',
                'gene-commentary'
            ]);

            var sources = sourceCommentary.map(source => {
                return {
                    name: _.first(source['gene-commentary_heading']),
                    id: _.first(parser._getIdFromSource(source))
                }
            });

            return {
                name: _.first(phenotype['gene-commentary_heading']),
                sources: sources
            }
        });

    }

}

export default parser;