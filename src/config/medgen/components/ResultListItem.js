import './resultListItem.scss'

import React from 'react'

class MedgenSearchResult extends React.Component {

    constructor() {
        super();
        this._getDefinition = this._getDefinition.bind(this);
    }

    _getDefinition() {
        if (!this.props.result.definition) return '';
        return this.props.result.definition.value;
    }

	render() {
		return (
			<li onClick={this.props.onClick}>
                <div className="title-text">
                    {this.props.result.title}
                </div>
                <div className="description-text">
                    {this._getDefinition()}
                </div>
			</li>
		);
	}

}

export default MedgenSearchResult;
