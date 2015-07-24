import {parseString} from 'xml2js'
import ResultListItem from './components/ResultListItem'
import SelectedResult from './components/SelectedResult'
import xmlToJson from '../../utils/xmlToJson';

var pubmed = {

    name: 'pubmed',
    displayName: 'Pub Med',

    components: {
        ResultListItem: ResultListItem,
        SelectedResult: SelectedResult
    },

    parsers: {
        efetch: xmlToJson
    }
};

export default pubmed;