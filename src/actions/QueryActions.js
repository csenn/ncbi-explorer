import alt from '../alt'

class QueryActions {

	updateQueryText(text) {
		this.dispatch(text);
	}

	updateQueryDb(db) {
		this.dispatch(db);
	}
}

export default alt.createActions(QueryActions);
