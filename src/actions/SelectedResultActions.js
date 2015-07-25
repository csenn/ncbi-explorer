import alt from '../alt'
import api from '../api/api'

class SelectedResultActions {

    fetch(resultSummary) {
        this.dispatch(resultSummary);
        api.getResultDetails(resultSummary.uid)
            .then(this.actions.fetchSuccess)
            .catch(this.actions.fetchFail)
    }

    fetchSuccess(result) {
        if (!result) return;
        this.dispatch(result.data);
    }

    fetchFail() {
        console.log(arguments)
    }
}

export default alt.createActions(SelectedResultActions);
