import './search.scss'

import React from 'react';
import dbs from '../../config/dbs'

import Header from './header/Header'
import DbList from './dbList/DbList'
import AdvancedQuery from './advancedQuery/AdvancedQuery'
import SearchResults from './searchResults/SearchResults'
import SelectedResult from './SelectedResult/SelectedResult'

import SearchQueryActions from '../../actions/QueryActions';
import SearchResultDetailsStore from '../../stores/SelectedResultStore';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Search extends React.Component {

	constructor() {
		super();

		this._toggleDbListOpen = this._toggleDbListOpen.bind(this);
		this._toggleAdvancedQuery = this._toggleAdvancedQuery.bind(this);
		this._getList = this._getList.bind(this);
		this.state = {
			showDbList: false,
			showAdvancedQuery: false
		}

		/* TEMP: eventually at query params first */
		//SearchQueryActions.updateQueryDb(dbs.pubmed);
	}

	_toggleDbListOpen() {
		this.setState({ showDbList: !this.state.showDbList });
	}

	_toggleAdvancedQuery() {
		this.setState({ showAdvancedQuery: !this.state.showAdvancedQuery });
	}

	_getOverlay() {
		return !this.state.showDbList ? null :
			<div className="db-list-overlay" key="overlay"></div>;
	}

	_getAdvancedQueryBuilder() {
		return !this.state.showAdvancedQuery? null : <AdvancedQuery key="advanced-query"/>;
	}

	_getList() {
		return !this.state.showDbList ? null :
			<DbList key="db-list" toggleDbListOpen={this._toggleDbListOpen}/>;
	}

	render() {
		return (
			<div className="search">
				<Header toggleDbListOpen={this._toggleDbListOpen} toggleAdvancedQuery={this._toggleAdvancedQuery}/>
				<div className="search-results-container">
					<SearchResults/>
				</div>
				<div className="search-content-container">
					<SelectedResult/>
				</div>
				<ReactCSSTransitionGroup transitionName="advancedQueryTransition">
					{this._getAdvancedQueryBuilder()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="dbOverlayTransition">
					{this._getOverlay()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="dbListTransition">
					{this._getList()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default Search;