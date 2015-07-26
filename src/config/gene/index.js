import ResultListItem from './components/resultListItem/ResultListItem'
import SelectedResult from './components/selectedResult/SelectedResult'
import xmlToJson from '../../utils/xmlToJson';

var gene = {

    name: 'gene',
    displayName: 'Gene',

    components: {
        ResultListItem: ResultListItem,
        SelectedResult: SelectedResult
    },

    efetch: {
        //skip: true,
        transformer: xmlToJson
    }
};

export default gene;