import ResultListItem from './components/ResultListItem'
import SelectedResult from './components/SelectedResult'
import xmlToJson from '../../utils/xmlToJson';

var gene = {

    name: 'gene',
    displayName: 'Gene',

    components: {
        ResultListItem: ResultListItem,
        SelectedResult: SelectedResult
    },

    efetch: {
        skip: true,
        transformer: xmlToJson
    }
};

export default gene;