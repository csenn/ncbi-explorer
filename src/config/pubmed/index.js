import {parseString} from 'xml2js'
import ResultListItem from './components/ResultListItem'
import SelectedResult from './components/SelectedResult'

var pubmed = {

	name: 'pubmed',
	displayName: 'Pub Med',

	components: {
		ResultListItem: ResultListItem,
		SelectedResult: SelectedResult
	},

	parsers: {
		efetch: function(dataBefore) {
			var jsonResult;
			parseString(dataBefore, { normalizeTags: true }, function(err, dataAfter) {
				jsonResult = dataAfter;
			});
			return jsonResult;
		}
	}
};

export default pubmed;