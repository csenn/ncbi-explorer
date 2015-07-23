import alt from '../alt';
import SearchResultActions from '../actions/ResultListActions';

class ResultListStore {

	constructor() {
	  	this.searchResults = {};
	  	this.isLoading = false;

	  	this.bindListeners({
	  		fetch: SearchResultActions.FETCH,
	  		handleFetchSuccess: SearchResultActions.FETCH_SUCCESS
  		});
	}

	fetch() {
		this.isLoading = true;
	}

	handleFetchSuccess(result) {
		this.isLoading = false;
		this.searchResults = result;
	}

}

export default alt.createStore(ResultListStore, 'ResultListStore');