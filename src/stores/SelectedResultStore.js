import alt from '../alt';
import SelectedResultActions from '../actions/SelectedResultActions';

class SelectedResultStore {

    constructor() {
        this.isLoading = false;
        this.selectedResultSummary = {};
        this.selectedResultDetails = {};

        this.bindListeners({
            fetch: SelectedResultActions.FETCH,
            setData: SelectedResultActions.FETCH_SUCCESS
        });
    }

    fetch(resultSummary) {
        this.isLoading = true;
        this.selectedResultSummary = resultSummary;
    }

    setData(data) {
        this.isLoading = false;
        this.selectedResultDetails = data;
    }
}

export default alt.createStore(
    SelectedResultStore,
    'SelectedResultStore'
);