import React from 'react'
import _ from 'lodash'
import connectToStores from 'alt/utils/connectToStores'
import dbs from '../../../config/dbs'
import ResultListStore from '../../../stores/ResultListStore'
import QueryStore from '../../../stores/QueryStore'
import SelectedResultActions from '../../../actions/SelectedResultActions'

@connectToStores
class SearchResults extends React.Component {

	constructor() {
		super()
		this._getResults = this._getResults.bind(this);
		this._clickResult = this._clickResult.bind(this);
		this._getCurrentPage = this._getCurrentPage.bind(this);
	}

	static getStores() {
		return [ResultListStore, QueryStore];
	}

	static getPropsFromStores() {
		return _.assign(
			ResultListStore.getState(),
			QueryStore.getState()
		)
	}

	_clickResult(result) {
		SelectedResultActions.fetch(result);
	}

	_getCurrentPage() {
		if (this.props.isLoading) return <div>Loading</div>;
		if (_.isEmpty(this.props.searchResults)) return;
		return (
			<span>
				<span className="current-page">
					1-20 of 9,004
				</span>
				<i className="material-icons arrow">keyboard_arrow_left</i>
				<i className="material-icons arrow">keyboard_arrow_right</i>
			</span>
		);
	}

	_getResults() {
		var searchResults = this.props.searchResults;
		if (!searchResults) return;

		var arr = [];
		Object.keys(searchResults).forEach(key => {
			var ResultListItem = dbs[this.props.query.db.name].components.ResultListItem;
			arr.push(
				<ResultListItem
					result={searchResults[key]}
					onClick={_.partial(this._clickResult, searchResults[key])}/>
			);
		});
		return arr;
	}

	render() {
		return (
			<div>
				<div className="list-header">
					{this._getCurrentPage()}
				</div>
				<div className="list-container">
					<ul>{this._getResults()}</ul>
				</div>
			</div>
		)
	}
}

export default SearchResults;