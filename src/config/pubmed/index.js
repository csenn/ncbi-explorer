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

    efetch: {
        transformer: xmlToJson
    }
};

export default pubmed;