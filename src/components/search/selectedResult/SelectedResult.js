import React from 'react'
import _ from 'lodash'
import connectToStores from 'alt/utils/connectToStores';
import SelectedResultHeader from './SelectedResultHeader'
import SelectedResultStore from '../../../stores/SelectedResultStore'
import QueryStore from '../../../stores/QueryStore'
import dbs from '../../../config/dbs'

@connectToStores
class SelectedResult extends React.Component {

	static getStores() {
		return [SelectedResultStore, QueryStore];
	}

	static getPropsFromStores() {
		return _.assign(
			SelectedResultStore.getState(),
			QueryStore.getState()
		)
	}

	_getHeader() {
		return <SelectedResultHeader selectedResultSummary={this.props.selectedResultSummary}/>
	}

	render() {

		if (!this.props.query.db) return <div></div>;

		if (_.isEmpty(this.props.selectedResultDetails)) {
			return <div></div>;
		}

		var Component = dbs[this.props.query.db.name].components.SelectedResult;

		return (
			<div>
				<div className="selected-result-header">
					{this._getHeader()}
				</div>

				<Component
					selectedResultSummary={this.props.selectedResultSummary}
					selectedResultDetails={this.props.selectedResultDetails}/>
			</div>
		);
	}

}

export default SelectedResult;