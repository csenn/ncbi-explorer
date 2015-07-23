import _ from 'lodash'
import {parseString} from 'xml2js'

export default {

	/*
		Provide a consistent output format
		[{label: 'Some Label', text: 'Some Text'}]
	*/

	getAbstractSections: function(result) {
		if (_.isEmpty(result)) return;
		var pubmedarticle = _.first(result.pubmedarticleset.pubmedarticle);
		var medlinecitation = _.first(pubmedarticle.medlinecitation);
		var article = _.first(medlinecitation.article);
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
	}
}