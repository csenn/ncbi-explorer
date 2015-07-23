import alt from '../alt'
import api from '../api/api'

class ResultListActions {

	fetch() {
		this.dispatch();
		api.getResultList()
			.then(this.actions.fetchSuccess)
			.catch(this.actions.fetchFail)
	}

	fetchSuccess(result) {
		this.dispatch(result);
	}

	fetchFail(err) {
		console.log(err);
	}
}

export default alt.createActions(ResultListActions);
