import _ from 'lodash'

/*
    http://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html
*/

 const parser = {

    _getArticle: function(result) {
        if (_.isEmpty(result)) return;
        var pubmedarticle = _.head(result.pubmedarticleset.pubmedarticle);
        var medlinecitation = _.head(pubmedarticle.medlinecitation);
        return _.head(medlinecitation.article);
    },


    /*
        Provide a consistent output format
        [{label: 'Some Label', text: 'Some Text'}]
    */

    getAbstractSections: function(result) {
        var article = parser._getArticle(result);
        var abstract = _.head(article.abstract);

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
        var authorlist = _.head(article.authorlist);
        return authorlist.author.map(author => {
            return {
                lastname: _.head(author.lastname),
                forename: _.head(author.forename),
                initials: _.head(author.initials)
            }
        })
    }
}

export default parser;