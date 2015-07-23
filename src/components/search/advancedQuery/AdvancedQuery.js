import React from 'react'
import _ from 'lodash'
import {DropDownMenu} from 'material-ui'
import DbDetailsStore from '../../../stores/SelectedDbStore'


class AdvancedQuery extends React.Component {

	constructor() {
		super()
		this._getList = this._getList.bind(this);
		this._onSelect = this._onSelect.bind(this);
		this.state = { selectedField: null };
	}

	_onSelect(item) {
		this.setState({selectedField: item})
	}

	_getList() {
		return DbDetailsStore.dbinfo.fieldlist.map(item => {
			return (
				<div className="search-list-item"
					 key={item.name}
					 onClick={_.partial(this._onSelect, item)}>
						{item.fullname}
				</div>
			);
		});
	}

	render() {
		return (
			<div className="advanced-query-builder">
				<div className="search-list">
					{this._getList()}
				</div>
				<div className="builder-section">
					<div className="generated-search-text">
						Carcinoma
					</div>
					<div>
						{this.state.selectedField && this.state.selectedField.description}
					</div>
					<div>
						<input type="text"/>
					</div>
				</div>
			</div>
		);
	}

}

export default AdvancedQuery;