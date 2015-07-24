import _ from 'lodash'

/*
    http://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html
*/

 const parser = {

    _getArticle: function(result) {
        if (_.isEmpty(result)) return;
        var pubmedarticle = _.first(result.pubmedarticleset.pubmedarticle);
        var medlinecitation = _.first(pubmedarticle.medlinecitation);
        return _.first(medlinecitation.article);
    },


    /*
        Provide a consistent output format
        [{label: 'Some Label', text: 'Some Text'}]
    */

    getAbstractSections: function(result) {
        var article = parser._getArticle(result);
        var abstract = _.first(article.abstract);

        return abstract.abstracttext.map(el => {
            if (_.isString(el)) {
                return { text: el };
            }
            return {
                label: el.$.Label,
                text: el._
            }
        });
    },

    getAuthors: function(result) {
        if (!result) return;
        var article = parser._getArticle(result);
        var authorlist = _.first(article.authorlist);
        return authorlist.author.map(author => {
            return {
                lastname: _.first(author.lastname),
                forename: _.first(author.forename),
                initials: _.first(author.initials)
            }
        })
    }
}

export default parser;