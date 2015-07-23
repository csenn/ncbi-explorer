import alt from '../alt';
import SearchQueryActions from '../actions/QueryActions';

class QueryStore {

	constructor() {

	  	this.query = {
	  		db: null,
	  		text: ''
	  	};

	  	this.bindListeners({
	  		handleUpdateQueryText: SearchQueryActions.UPDATE_QUERY_TEXT,
	  		handleUpdateQueryDb: SearchQueryActions.UPDATE_QUERY_DB
  		});

	}

	handleUpdateQueryDb(db) {
		this.query.db = db;
	}

	handleUpdateQueryText(text) {
		this.query.text = text;
	}
}

export default alt.createStore(
	QueryStore,
	'QueryStore'
);